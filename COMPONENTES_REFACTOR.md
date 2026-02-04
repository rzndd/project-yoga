# Yoga Studio - Frontend Refatorado

## 📁 Estrutura de Componentes Melhorada

```
src/
├── components/
│   ├── common/              # Componentes reutilizáveis
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Loading.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── index.js         # Export centralizado
│   ├── layout/              # Componentes de layout
│   │   ├── Container.jsx
│   │   ├── Grid.jsx
│   │   └── index.js
│   ├── sections/            # Seções reutilizáveis
│   │   ├── HeroSection.jsx
│   │   └── index.js
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...outros
├── pages/                   # Páginas da aplicação
│   ├── Home/
│   ├── Classes/
│   ├── Instructors/
│   ├── Memberships/
│   ├── Schedule/
│   └── ...
├── context/                 # Estado global com Context API
│   └── YogaContext.jsx
├── hooks/                   # Custom hooks reutilizáveis
│   ├── useFetch.js
│   ├── useForm.js
│   └── ...
├── services/                # Serviços (API calls)
│   └── yogaService.js
├── utils/                   # Funções utilitárias
│   ├── formatters.js
│   ├── validation.js
│   └── index.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## 🎯 Destaques da Refatoração

### 1. **Componentes Comuns (Common)**
Componentes reutilizáveis sem lógica de negócio:
- `Button` - Botão com múltiplas variantes
- `Card` - Estrutura base para cards
- `Input/Select/Textarea` - Componentes de formulário
- `Loading` - Indicador de carregamento
- `ErrorBoundary` - Tratamento de erros

### 2. **Layout Components**
Componentes para estrutura visual:
- `Container` - Wrapper com max-width
- `Grid` - Sistema de grid responsivo

### 3. **Sections**
Seções reutilizáveis para diferentes páginas:
- `HeroSection` - Seção herói customizável

### 4. **Custom Hooks**
Lógica reutilizável:
- `useFetch` - Fetch de dados com loading/error
- `useForm` - Gerenciamento de formulários

### 5. **Context API**
Estado global:
```javascript
import { useYoga } from './context/YogaContext'

function MyComponent() {
  const { classes, instructors, loading, error } = useYoga()
  // ...
}
```

### 6. **Services**
Centralização de chamadas à API:
```javascript
import * as yogaService from './services/yogaService'

const classes = await yogaService.getClasses()
```

### 7. **Utils**
Funções utilitárias:
- `formatters.js` - Formatação de data, moeda, texto
- `validation.js` - Validadores de formulário

## 🚀 Como Usar

### Usando Componentes Comuns
```jsx
import { Button, Card, CardBody, Input, Loading } from '@/components/common'

<Card>
  <CardBody>
    <Input label="Email" type="email" placeholder="seu@email.com" />
    <Button variant="primary">Enviar</Button>
  </CardBody>
</Card>
```

### Usando Context Global
```jsx
import { useYoga } from '@/context/YogaContext'

function Classes() {
  const { classes, loading, error, refetchData } = useYoga()
  
  if (loading) return <Loading />
  if (error) return <div>Erro: {error}</div>
  
  return (
    <Grid cols={3}>
      {classes.map(cls => <ClassCard key={cls.id} {...cls} />)}
    </Grid>
  )
}
```

### Usando Custom Hooks
```jsx
import { useFetch } from '@/hooks/useFetch'
import { useForm } from '@/hooks/useForm'

// Fetch de dados
const { data, loading, error } = useFetch(() => getClasses())

// Formulário
const form = useForm(
  { email: '', password: '' },
  async (values) => await loginUser(values)
)
```

### Usando Utils
```jsx
import { formatCurrency, formatDate, truncateText } from '@/utils'

<div>
  <p>{formatCurrency(99.90)}</p>
  <p>{formatDate(new Date())}</p>
  <p>{truncateText('texto muito longo...', 50)}</p>
</div>
```

## 📦 Variantes e Props

### Button
```jsx
<Button 
  variant="primary|secondary|danger|outline"
  size="sm|md|lg"
  type="button|submit|reset"
  disabled={false}
  onClick={handler}
/>
```

### Card
```jsx
<Card className="custom-class">
  <CardHeader>Título</CardHeader>
  <CardBody>Conteúdo</CardBody>
  <CardFooter>Rodapé</CardFooter>
</Card>
```

### Input
```jsx
<Input
  label="Nome"
  type="text"
  name="name"
  error="Campo obrigatório"
  touched={true}
  onChange={handler}
/>
```

### Grid
```jsx
<Grid cols={3} gap="md|sm|lg">
  {items.map(item => <Item key={item.id} {...item} />)}
</Grid>
```

## 🎨 Cores e Temas
- **Primário**: `#8b5cf6` (Purple)
- **Secundário**: `#e5e7eb` (Gray)
- **Sucesso**: `#10b981` (Green)
- **Perigo**: `#ef4444` (Red)

## ✅ Benefícios da Nova Estrutura

- ✨ **Reutilização de Componentes** - Menos duplicação de código
- 🎯 **Componentes Pequenos** - Mais fácil de testar e manter
- 🔄 **Estado Global** - Context API para dados compartilhados
- 🪝 **Custom Hooks** - Lógica reutilizável
- 📝 **Type Safety** - Pronto para adicionar TypeScript
- 📱 **Responsive** - Grid e componentes adaptáveis
- ⚡ **Performance** - Lazy loading e code splitting
- 🛡️ **Error Handling** - ErrorBoundary e validações

## 📌 Próximos Passos

1. Refatorar componentes Header e Footer com nova estrutura
2. Adicionar TypeScript
3. Adicionar testes unitários
4. Implementar lazy loading de rotas
5. Adicionar mais componentes específicos conforme necessário
