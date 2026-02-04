export const validators = {
  email: (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(value) || 'Email inválido'
  },

  required: (value) => {
    return value && value.trim() !== '' || 'Este campo é obrigatório'
  },

  minLength: (length) => (value) => {
    return !value || value.length >= length || `Mínimo de ${length} caracteres`
  },

  maxLength: (length) => (value) => {
    return !value || value.length <= length || `Máximo de ${length} caracteres`
  },

  phone: (value) => {
    const regex = /^(\d{10}|\d{11})$/
    return regex.test(value?.replace(/\D/g, '')) || 'Telefone inválido'
  },

  password: (value) => {
    if (!value) return 'Senha obrigatória'
    if (value.length < 8) return 'Mínimo de 8 caracteres'
    return true
  },

  confirmPassword: (password) => (value) => {
    return value === password || 'As senhas não conferem'
  },

  date: (value) => {
    const date = new Date(value)
    return !isNaN(date.getTime()) || 'Data inválida'
  }
}

export const validateForm = (formData, schema) => {
  const errors = {}
  
  Object.keys(schema).forEach(field => {
    const validators = schema[field]
    const value = formData[field]

    for (const validator of validators) {
      const result = validator(value)
      if (result !== true) {
        errors[field] = result
        break
      }
    }
  })

  return errors
}
