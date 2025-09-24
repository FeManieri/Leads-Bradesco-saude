export const clearFormCache = () => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.includes('form') || key.includes('input') || key.includes('field')) {
        localStorage.removeItem(key);
      }
    });

    const sessionKeys = Object.keys(sessionStorage);
    sessionKeys.forEach(key => {
      if (key.includes('form') || key.includes('input') || key.includes('field')) {
        sessionStorage.removeItem(key);
      }
    });

    console.log('🧹 Cache de formulários limpo');
  } catch (error) {
    console.warn('⚠️ Erro ao limpar cache:', error);
  }
};