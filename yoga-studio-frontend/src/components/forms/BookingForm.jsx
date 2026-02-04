import { useState } from 'react'
import { Button } from '../common'
import { Input, Textarea } from '../common/Input'
import { validators, validateForm } from '../../utils'
import './BookingForm.css'

export function BookingForm({ item, itemType, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validationSchema = {
    name: [validators.required],
    email: [validators.required, validators.email],
    phone: [validators.required, validators.phone]
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpar erro do campo
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm(formData, validationSchema)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setLoading(true)
      await onSubmit({
        ...formData,
        itemType,
        itemId: item.id,
        itemName: item.name
      })
      
      window.showToast?.('Inscrição realizada com sucesso!', 'success')
      onClose()
    } catch (error) {
      window.showToast?.(error.message || 'Erro ao realizar inscrição', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-section">
        <h3>Inscrição em: {item.name}</h3>
        {item.price && (
          <p className="item-price">
            <strong>Valor:</strong> R$ {item.price}
          </p>
        )}
      </div>

      <Input
        label="Nome Completo"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Seu nome"
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="seu@email.com"
      />

      <Input
        label="Telefone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="(11) 99999-9999"
      />

      <Textarea
        label="Mensagem (opcional)"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Conte-nos mais sobre você..."
      />

      <div className="form-actions">
        <Button 
          variant="secondary" 
          onClick={onClose}
          type="button"
        >
          Cancelar
        </Button>
        <Button 
          variant="primary" 
          disabled={loading}
          type="submit"
        >
          {loading ? 'Processando...' : 'Confirmar Inscrição'}
        </Button>
      </div>
    </form>
  )
}
