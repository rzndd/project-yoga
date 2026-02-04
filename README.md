# 🧘 Serenity Yoga Studio - Projeto Completo

Um website moderno e responsivo para um estúdio de yoga, com componentização completa e API REST.

## 📋 Estrutura do Projeto

```
projeto-yoga/
├── yoga-studio-frontend/          # Frontend React com Vite
│   ├── src/
│   │   ├── components/            # Componentes reutilizáveis
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ClassCard.jsx
│   │   │   ├── MembershipCard.jsx
│   │   │   └── InstructorCard.jsx
│   │   ├── pages/                 # Páginas do site
│   │   │   ├── Home.jsx
│   │   │   ├── Classes.jsx
│   │   │   ├── Schedule.jsx
│   │   │   ├── Memberships.jsx
│   │   │   └── Instructors.jsx
│   │   ├── services/              # Chamadas de API
│   │   ├── context/               # Context API
│   │   └── styles/                # CSS global
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── yoga-studio-backend/           # Backend Flask
    ├── app/
    │   ├── models/               # Modelos de Banco de Dados
    │   │   └── __init__.py
    │   ├── routes/               # Rotas da API
    │   │   ├── classes.py
    │   │   ├── instructors.py
    │   │   ├── schedule.py
    │   │   ├── memberships.py
    │   │   └── bookings.py
    │   └── __init__.py
    ├── run.py
    └── requirements.txt
```

## 🚀 Como Começar

### Frontend Setup

```bash
cd yoga-studio-frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

### Backend Setup

```bash
cd yoga-studio-backend
pip install -r requirements.txt
python run.py
```

O backend estará disponível em `http://localhost:5000`

## 📦 Componentes React

### Header
- Navegação principal
- Links para todas as seções
- Botões de Login e Cadastro

### Footer
- Informações de contato
- Links de redes sociais
- Copyright

### ClassCard
- Exibe aula com detalhes
- Nível, instrutor, duração
- Botão de reserva

### MembershipCard
- Mostra planos de assinatura
- Preço, duração, features
- Destaque do plano mais popular

### InstructorCard
- Perfil do instrutor
- Especialidades
- Horário de aulas

## 📄 Páginas Principais

### Home
- Hero section com CTA
- Features do estúdio
- Chamada para ação

### Classes
- Catálogo de aulas
- Filtro por nível
- Grid responsivo

### Schedule
- Horários semanais
- Aulas por dia
- Reserva rápida

### Memberships
- Planos disponíveis
- Comparação de preços
- FAQ

### Instructors
- Perfil dos professores
- Especialidades
- Horários

## 🔗 API Endpoints

### Classes
- `GET /api/classes` - Lista todas as aulas
- `GET /api/classes/<id>` - Detalhes de uma aula
- `POST /api/classes` - Criar aula
- `PUT /api/classes/<id>` - Atualizar aula
- `DELETE /api/classes/<id>` - Deletar aula

### Instructors
- `GET /api/instructors` - Lista instrutores
- `GET /api/instructors/<id>` - Detalhes instrutor
- `POST /api/instructors` - Criar instrutor
- `PUT /api/instructors/<id>` - Atualizar
- `DELETE /api/instructors/<id>` - Deletar

### Schedule
- `GET /api/schedule` - Lista horários
- `GET /api/schedule/by-day/<day>` - Horários por dia
- `POST /api/schedule` - Criar horário
- `PUT /api/schedule/<id>` - Atualizar
- `DELETE /api/schedule/<id>` - Deletar

### Memberships
- `GET /api/memberships` - Lista planos
- `GET /api/memberships/<id>` - Detalhes do plano
- `POST /api/memberships` - Criar plano
- `PUT /api/memberships/<id>` - Atualizar
- `DELETE /api/memberships/<id>` - Deletar

### Bookings
- `GET /api/bookings` - Lista reservas
- `GET /api/bookings/user/<user_id>` - Reservas do usuário
- `POST /api/bookings` - Criar reserva
- `PUT /api/bookings/<id>` - Atualizar
- `DELETE /api/bookings/<id>` - Cancelar

## 🗄️ Modelos de Banco de Dados

### YogaClass
- id, name, description, level, duration, max_participants

### Instructor
- id, name, email, bio, specialties, phone

### Schedule
- id, class_id, day_of_week, start_time, end_time

### Membership
- id, name, description, price, duration_days, unlimited_classes

### User
- id, name, email, phone, membership_id, dates

### Booking
- id, user_id, class_id, schedule_id, booking_date, status

## 🎨 Customização

O projeto usa cores em tema azul/roxo:
- Primária: `#667eea`
- Secundária: `#3498db`
- Dark: `#2c3e50`
- Light: `#ecf0f1`

Customize em `src/styles/index.css` e nos componentes.

## 📱 Responsividade

Todos os componentes são totalmente responsivos para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔒 Próximos Passos

- [ ] Autenticação de usuários (JWT)
- [ ] Sistema de pagamento (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] Notificações por email
- [ ] Blog/Blog posts
- [ ] Sistema de avaliações
- [ ] Integração com WhatsApp
- [ ] Deploy (Heroku, Vercel, etc)

## 📝 Licença

Este projeto é de código aberto e livre para uso.

---

**Desenvolvido com ❤️ para Serenity Yoga Studio**
