# 📚 Exemplos de Uso - Componentes Avançados

## 1️⃣ Modal com Formulário

```jsx
import { Modal, useModal } from '@/components/common'
import { BookingForm } from '@/components/forms'

function MyComponent() {
  const modal = useModal()
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSubmit = async (formData) => {
    console.log('Enviando:', formData)
    // await api.createBooking(formData)
  }

  return (
    <>
      <button onClick={() => {
        setSelectedItem(myItem)
        modal.open()
      }}>
        Abrir Modal
      </button>

      {selectedItem && (
        <Modal 
          isOpen={modal.isOpen}
          onClose={modal.close}
          title={`Inscrever em ${selectedItem.name}`}
          size="md"
        >
          <BookingForm 
            item={selectedItem}
            itemType="class"
            onSubmit={handleSubmit}
            onClose={modal.close}
          />
        </Modal>
      )}
    </>
  )
}
```

---

## 2️⃣ Toast Notifications

```jsx
import { ToastContainer } from '@/components/common'

// No App.jsx
<ToastContainer />

// Em qualquer componente
function MyComponent() {
  const handleSuccess = () => {
    window.showToast('Operação realizada com sucesso!', 'success')
  }

  const handleError = () => {
    window.showToast('Erro ao processar', 'error')
  }

  const handleWarning = () => {
    window.showToast('Atenção: Algo não está certo', 'warning')
  }

  const handleInfo = () => {
    window.showToast('Informação importante', 'info')
  }

  return (
    <>
      <button onClick={handleSuccess}>Sucesso</button>
      <button onClick={handleError}>Erro</button>
      <button onClick={handleWarning}>Aviso</button>
      <button onClick={handleInfo}>Info</button>
    </>
  )
}
```

---

## 3️⃣ Busca e Filtros

```jsx
import { SearchFilter } from '@/components/forms'
import { useState, useEffect } from 'react'

function MyList({ items }) {
  const [filtered, setFiltered] = useState(items)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const result = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFiltered(result)
  }, [searchTerm, items])

  return (
    <>
      <SearchFilter
        placeholder="Digite para buscar..."
        onSearch={setSearchTerm}
      />
      
      {filtered.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  )
}
```

---

## 4️⃣ Página com Detalhes

```jsx
import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardFooter, Button, Modal, useModal } from '@/components/common'
import { BookingForm } from '@/components/forms'

export function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const modal = useModal()
  const { items } = useContext(MyContext)

  const item = items?.find(i => i.id === parseInt(id))

  if (!item) {
    return <div>Não encontrado</div>
  }

  const handleBook = async (formData) => {
    try {
      await api.book(formData)
      window.showToast('Inscrição realizada!', 'success')
      modal.close()
    } catch (error) {
      window.showToast(error.message, 'error')
    }
  }

  return (
    <>
      <Card>
        <CardBody>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          
          {item.price && (
            <h2>R$ {item.price}</h2>
          )}
        </CardBody>

        <CardFooter>
          <Button onClick={() => navigate(-1)}>Voltar</Button>
          <Button 
            variant="primary"
            onClick={modal.open}
          >
            Inscrever-se
          </Button>
        </CardFooter>
      </Card>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Inscrição"
      >
        <BookingForm
          item={item}
          itemType="class"
          onSubmit={handleBook}
          onClose={modal.close}
        />
      </Modal>
    </>
  )
}
```

---

## 5️⃣ Validação de Formulário

```jsx
import { validators, validateForm } from '@/utils'
import { useForm } from '@/hooks/useForm'

function MyForm() {
  const schema = {
    name: [validators.required],
    email: [validators.required, validators.email],
    phone: [
      validators.required,
      validators.phone
    ],
    password: [
      validators.required,
      validators.password
    ]
  }

  const form = useForm(
    { name: '', email: '', phone: '', password: '' },
    async (values) => {
      const errors = validateForm(values, schema)
      if (Object.keys(errors).length > 0) {
        Object.entries(errors).forEach(([field, error]) => {
          window.showToast(error, 'error')
        })
        return
      }
      
      // Enviar dados
      await api.create(values)
      window.showToast('Criado com sucesso!', 'success')
    }
  )

  return (
    <form onSubmit={form.handleSubmit}>
      <Input
        label="Nome"
        name="name"
        value={form.values.name}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.name}
        touched={form.touched.name}
      />
      
      <button type="submit" disabled={form.isSubmitting}>
        {form.isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
```

---

## 6️⃣ Usando Animações

```jsx
import '@/styles/animations.css'

function AnimatedCard() {
  return (
    <div className="animate-slide-up">
      <div className="card hover-lift">
        <h3>Título</h3>
        <p>Conteúdo</p>
        <button className="hover-grow">
          Clique aqui
        </button>
      </div>
    </div>
  )
}

// Com delay
function AnimatedList({ items }) {
  return items.map((item, idx) => (
    <div 
      key={item.id}
      className={`animate-slide-up fade-in-delay-${idx + 1}`}
    >
      {item.name}
    </div>
  ))
}
```

---

## 7️⃣ Grid Responsivo

```jsx
import { Grid } from '@/components/layout'
import { Card } from '@/components/common'

function MyGrid() {
  return (
    <Grid cols={3} gap="lg">
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
      <Card>Item 4</Card>
      <Card>Item 5</Card>
      <Card>Item 6</Card>
    </Grid>
  )
}

// Respondem automaticamente:
// Desktop: 3 colunas
// Tablet: 2 colunas
// Mobile: 1 coluna
```

---

## 8️⃣ Hook useForm Completo

```jsx
import { useForm } from '@/hooks/useForm'

function FormComponent() {
  const handleSubmit = async (values) => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(values)
    })
    return response.json()
  }

  const form = useForm(
    {
      email: '',
      password: '',
      rememberMe: false
    },
    handleSubmit
  )

  return (
    <form onSubmit={form.handleSubmit}>
      {/* Input com validação */}
      <input
        name="email"
        value={form.values.email}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      {form.errors.email && form.touched.email && (
        <span>{form.errors.email}</span>
      )}

      {/* Usar form.resetForm() para limpar */}
      <button type="button" onClick={form.resetForm}>
        Limpar
      </button>

      {/* Controlar valores manualmente */}
      <button 
        type="button"
        onClick={() => form.setValues({ email: 'test@example.com' })}
      >
        Preencher
      </button>

      <button 
        type="submit"
        disabled={form.isSubmitting}
      >
        {form.isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
```

---

## 9️⃣ Hook useFetch Completo

```jsx
import { useFetch } from '@/hooks/useFetch'
import * as yogaService from '@/services/yogaService'

function MyComponent() {
  const { data, loading, error } = useFetch(
    () => yogaService.getClasses(),
    [] // Depedências
  )

  if (loading) return <Loading />
  if (error) return <div>Erro: {error}</div>

  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

// Com refetch
function MyComponentWithRefetch() {
  const [items, setItems] = useState([])
  const { data, loading } = useFetch(
    () => yogaService.getClasses()
  )

  useEffect(() => {
    if (data) setItems(data)
  }, [data])

  const handleRefresh = () => {
    // Reexecutar hook
    setItems([])
  }

  return (
    <>
      <button onClick={handleRefresh}>Atualizar</button>
      {loading && <Loading />}
      {items.map(item => <div key={item.id}>{item.name}</div>)}
    </>
  )
}
```

---

## 🔟 Context API - Usar Estado Global

```jsx
import { useYoga } from '@/context/YogaContext'

function MyComponent() {
  const { 
    classes,           // Array de aulas
    instructors,       // Array de instrutores
    memberships,       // Array de memberships
    schedule,          // Agenda
    loading,           // Bool
    error,             // Mensagem de erro
    refetchData        // Função para recarregar
  } = useYoga()

  if (loading) return <Loading />
  if (error) return <div>Erro: {error}</div>

  return (
    <div>
      <h2>Aulas: {classes?.length}</h2>
      <h2>Instrutores: {instructors?.length}</h2>
      
      <button onClick={refetchData}>
        Recarregar dados
      </button>

      {classes?.map(cls => (
        <div key={cls.id}>{cls.name}</div>
      ))}
    </div>
  )
}
```

---

## 📌 Classes Utilitárias

```jsx
// Espaçamento
<div className="mb-2 mt-3 p-4">Conteúdo</div>

// Texto
<p className="text-lg text-primary font-bold">Título</p>
<p className="text-sm text-gray-600">Subtítulo</p>

// Flexbox
<div className="flex gap-2">Item 1</div>
<div className="flex-center">Centralizado</div>
<div className="flex-between">Espaçado</div>

// Sombras
<div className="shadow-md rounded-lg">Card</div>

// Cores
<div className="text-success">Sucesso</div>
<div className="text-error">Erro</div>
```

---

## ✅ Checklist de Implementação

- [x] Modal com formulário
- [x] Toast notifications
- [x] Busca em tempo real
- [x] Páginas de detalhes
- [x] Validação de formulários
- [x] Animações CSS
- [x] Grid responsivo
- [x] Context API
- [x] Custom hooks
- [x] Classes utilitárias

---

**Próximo passo: Conectar à API real do backend! 🚀**
