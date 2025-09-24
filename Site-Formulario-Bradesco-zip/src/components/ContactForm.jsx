import React, { useState, useCallback, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { Calendar, Phone, Mail, User, MapPin, Users, MessageSquare } from 'lucide-react';
    import { clearFormCache } from '@/lib/clearFormCache';

    const ContactForm = () => {
      const { toast } = useToast();
      const navigate = useNavigate();
      const initialFormData = {
        nome: '',
        telefone: '',
        email: '',
        nascimento: '',
        estado: '',
        cidade: '',
        vidas: 1,
        mensagem: '',
        lgpd: false
      };
      const [formData, setFormData] = useState(initialFormData);
      const [isSubmitting, setIsSubmitting] = useState(false);

      useEffect(() => {
        clearFormCache();
      }, []);

      const estados = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
        'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
      ];

      const handleInputChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        let formattedValue = value;
        if (name === 'telefone') {
          formattedValue = value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, 15);
        } else if (name === 'nascimento') {
          formattedValue = value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .slice(0, 10);
        }
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : formattedValue
        }));
      }, []);
      
      const handleSelectChange = useCallback((name, value) => {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.lgpd) {
          toast({
            title: "Atenção",
            description: "Você deve concordar com a Política de Privacidade para continuar.",
            variant: "destructive"
          });
          return;
        }

        if (!formData.estado) {
          toast({
            title: "Campo obrigatório",
            description: "Por favor, selecione um estado.",
            variant: "destructive"
          });
          return;
        }

        const vidasNumerico = Number(formData.vidas);
        if (isNaN(vidasNumerico) || vidasNumerico < 1) {
          toast({
            title: "Campo inválido",
            description: "Por favor, insira um número de vidas válido (mínimo 1).",
            variant: "destructive"
          });
          return;
        }

        setIsSubmitting(true);
        
        const webhookUrl = 'https://n8n.bradescoparamedicos.com/webhook-test/WEBHOOK/BRADESCO';

        try {
          const payload = {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone.replace(/\D/g, ''),
            nascimento: formData.nascimento,
            estado: formData.estado,
            cidade: formData.cidade,
            vidas: formData.vidas,
            mensagem: formData.mensagem,
          };

          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            mode: 'no-cors', // Re-adicionado para evitar o erro de CORS
          });
          
          toast({
            title: "Sucesso!",
            description: "Seus dados foram enviados. Em breve entraremos em contato.",
          });
          navigate('/sucesso');

        } catch (error) {
          console.error('Erro ao enviar dados para o webhook:', error);
          toast({
            title: "Erro ao Enviar",
            description: "Não foi possível enviar seus dados. Por favor, tente novamente.",
            variant: "destructive"
          });
        } finally {
          setIsSubmitting(false);
        }
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-light-gray rounded-lg shadow-lg p-6 w-full max-w-md"
          id="formulario"
        >
          <h3 className="text-xl font-bold bradesco-red mb-4 text-center">
            Solicite sua Cotação
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div>
              <Label htmlFor="nome" className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4" />
                Nome Completo *
              </Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                required
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Digite seu nome completo"
                autoComplete="off"
                data-autocomplete="disabled"
              />
            </div>

            <div>
              <Label htmlFor="telefone" className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4" />
                Telefone com DDD *
              </Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                required
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="(11) 99999-9999"
                maxLength="15"
                autoComplete="off"
                data-autocomplete="disabled"
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" />
                E-mail *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                autoComplete="off"
                data-autocomplete="disabled"
              />
            </div>

            <div>
              <Label htmlFor="nascimento" className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4" />
                Data de Nascimento *
              </Label>
              <Input
                id="nascimento"
                name="nascimento"
                type="text"
                required
                value={formData.nascimento}
                onChange={handleInputChange}
                placeholder="DD/MM/AAAA"
                maxLength="10"
                autoComplete="off"
                data-autocomplete="disabled"
              />
            </div>

            <div>
              <Label htmlFor="estado" className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" /> Estado *
              </Label>
              <select
                id="estado"
                name="estado"
                required
                value={formData.estado}
                onChange={(e) => handleSelectChange('estado', e.target.value)}
                className="w-full border rounded-md h-10 px-3 bg-white"
                autoComplete="off"
                data-autocomplete="disabled"
                data-form="off"
              >
                <option value="" disabled>Selecione seu estado</option>
                {estados.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="cidade" className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                Cidade *
              </Label>
              <Input
                id="cidade"
                name="cidade"
                type="text"
                required
                value={formData.cidade}
                onChange={handleInputChange}
                placeholder="Digite sua cidade"
                autoComplete="off"
                data-autocomplete="disabled"
              />
            </div>

            <div>
              <Label htmlFor="vidas" className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4" />
                Número de Vidas *
              </Label>
              <Input
                id="vidas"
                name="vidas"
                type="number"
                min="1"
                max="50"
                required
                value={formData.vidas}
                onChange={handleInputChange}
                autoComplete="off"
                data-autocomplete="disabled"
              />
            </div>

            <div>
              <Label htmlFor="mensagem" className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4" />
                Mensagem (opcional)
              </Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Deixe sua mensagem ou dúvida"
                rows={3}
                autoComplete="off"
                data-autocomplete="disabled"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="lgpd"
                name="lgpd"
                type="checkbox"
                checked={formData.lgpd}
                onChange={handleInputChange}
                required
                className="h-4 w-4 rounded border-gray-300 text-bradesco-red focus:ring-bradesco-red"
              />
              <Label htmlFor="lgpd" className="text-sm font-medium text-gray-700 cursor-pointer">
                Li e concordo com a Política de Privacidade *
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-bradesco-red hover:bg-bradesco-red-dark text-white font-semibold py-3 rounded-md transition-colors"
            >
              {isSubmitting ? 'Enviando...' : 'ENVIAR'}
            </Button>
          </form>
        </motion.div>
      );
    };

    export default ContactForm;