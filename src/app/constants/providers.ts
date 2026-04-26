export interface ProductHighlight {
  image: string;
  title: string;
  description: string;
}

export interface PriceLevel {
  level: string;
  quantity: string;
  unitPrice: string;
  leadTime: string;
}

export interface TrustMetrics {
  deliveryRate: number;
  avgResponseTime: string;
  monthlyCapacity: string;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Provider {
  id: number;
  name: string;
  description: string;
  location: string;
  yearsOfExperience: number;
  costRate: 1 | 2 | 3;
  logo: string;
  cover: string;
  category: string;
  verified: boolean;
  qualification: number;
  reviews: Review[];
  favorite: boolean;
  minProduct: { value: number; unit: string; };
  highlights: ProductHighlight[];
  pricing: PriceLevel[];
  metrics: TrustMetrics;
}

export const providers: Provider[] = [
  {
    id: 4544,
    name: 'Industrias Aceros Global S.A.',
    location: 'Monterrey, MX',
    yearsOfExperience: 20,
    costRate: 2,
    category: 'construction',
    verified: true,
    qualification: 4.9,
    favorite: false,
    minProduct: { value: 1200, unit: 'ud' },
    logo: 'https://images.unsplash.com/photo-1581094288338-2314dddb7e8c?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    description: 'Industrias Aceros Global S.A. es el referente regional en la fabricación de componentes de acero estructural para la construcción civil e industrial pesada. Con más de 20 años en el mercado, hemos perfeccionado procesos de fundición y forjado que superan los estándares internacionales de seguridad.\n\nNuestra infraestructura en Monterrey nos permite despachar pedidos de gran tonelaje hacia cualquier punto de Norteamérica, garantizando una trazabilidad completa desde la materia prima hasta el ensamblaje final en obra.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500&auto=format&fit=crop', title: 'Vigas H-Beam', description: 'Acero de alta densidad para rascacielos y puentes industriales.' },
      { image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=500&auto=format&fit=crop', title: 'Perfiles Especiales', description: 'Cortes de precisión láser para estructuras metálicas personalizadas.' },
      { image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=500&auto=format&fit=crop', title: 'Refuerzos Grado 60', description: 'Varillas de acero corrugado de alta ductilidad para cimentaciones.' }
    ],
    pricing: [
      { level: 'Proyect', quantity: '1-500 ud', unitPrice: '$85.00', leadTime: '15 días' },
      { level: 'Industrial', quantity: '500+ ud', unitPrice: '$72.00', leadTime: '30 días' }
    ],
    metrics: { deliveryRate: 98.5, avgResponseTime: '< 4h', monthlyCapacity: '20k toneladas' },
    reviews: [
      { user: 'Ricardo Mendoza', rating: 5, comment: 'Excelente calidad en las vigas para nuestro último proyecto.', date: '2026-02-15' },
      { user: 'Elena Torres', rating: 4, comment: 'Cumplen con los tiempos, aunque el embalaje podría mejorar.', date: '2026-03-10' }
    ]
  },
  {
    id: 4423,
    name: 'LogiTech Solutions Inc.',
    location: 'Bogotá, CO',
    yearsOfExperience: 12,
    costRate: 3,
    category: 'logistics',
    verified: false,
    qualification: 4.7,
    favorite: false,
    minProduct: { value: 500, unit: 'trayecto' },
    logo: 'https://images.unsplash.com/photo-1473445711224-3c974882196b?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    description: 'LogiTech Solutions redefine la logística tradicional mediante la implementación de algoritmos de inteligencia artificial para la optimización de rutas y gestión de flotas masivas. Nos especializamos en carga crítica y materiales sensibles.\n\nDesde nuestra sede en Bogotá, conectamos los principales puertos del continente con centros de distribución urbanos, reduciendo los tiempos de espera en aduanas y maximizando la eficiencia operativa de nuestros socios comerciales.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=500&auto=format&fit=crop', title: 'Flota Autónoma', description: 'Camiones inteligentes para entregas seguras en rutas críticas.' },
      { image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=500&auto=format&fit=crop', title: 'Almacén IA', description: 'Gestión de inventarios automatizada con visión artificial avanzada.' },
      { image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad21?q=80&w=500&auto=format&fit=crop', title: 'Last Mile Express', description: 'Distribución capilar optimizada para entregas urbanos en tiempo récord.' }
    ],
    pricing: [
      { level: 'Local', quantity: '1-10 viajes', unitPrice: '$320.00', leadTime: '24h' },
      { level: 'Regional', quantity: '11+ viajes', unitPrice: '$280.00', leadTime: '48h' }
    ],
    metrics: { deliveryRate: 99.1, avgResponseTime: '< 1h', monthlyCapacity: '1,500 despachos' },
    reviews: [
      { user: 'Carlos Slim', rating: 5, comment: 'La optimización de rutas nos ahorró mucho combustible.', date: '2026-01-20' },
      { user: 'Martha Lucía G.', rating: 4, comment: 'Muy buena trazabilidad, excelente servicio al cliente.', date: '2026-04-05' }
    ]
  },
  {
    id: 5478,
    name: 'NetCore Infrastructure',
    location: 'Lima, PE',
    yearsOfExperience: 15,
    costRate: 1,
    category: 'technology',
    verified: true,
    qualification: 4.8,
    favorite: false,
    minProduct: { value: 346, unit: 'mes' },
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=1200&auto=format&fit=crop',
    description: 'En NetCore Infrastructure construimos la columna vertebral digital de las empresas modernas a través de despliegues de fibra óptica y centros de datos modulares. Garantizamos que la latencia nunca sea un obstáculo.\n\nContamos con certificaciones Tier III y un equipo de ingeniería disponible las 24 horas para asegurar que la infraestructura crítica de su empresa permanezca operativa ante cualquier contingencia técnica o climática.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop', title: 'Data Centers', description: 'Hospedaje de alta disponibilidad para aplicaciones críticas empresariales.' },
      { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop', title: 'Consultoría TI', description: 'Diseño de arquitecturas de red para oficinas modernas inteligentes.' },
      { image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=500&auto=format&fit=crop', title: 'Fibra Dedicada', description: 'Conexión simétrica de ultra-velocidad para entornos corporativos exigentes.' }
    ],
    pricing: [
      { level: 'Startup', quantity: '1 rack', unitPrice: '$450.00', leadTime: '5 días' },
      { level: 'Corp', quantity: '5+ racks', unitPrice: '$380.00', leadTime: '15 días' }
    ],
    metrics: { deliveryRate: 100, avgResponseTime: '< 30m', monthlyCapacity: '500 TB/s' },
    reviews: [
      { user: 'Ing. David Acevedo', rating: 5, comment: 'El uptime en Lima es impecable. Soporte técnico premium.', date: '2026-03-22' }
    ]
  },
  {
    id: 957,
    name: 'Constructora Delta',
    location: 'Santiago, CL',
    yearsOfExperience: 25,
    costRate: 3,
    category: 'construction',
    verified: false,
    qualification: 4.5,
    favorite: false,
    minProduct: { value: 2500, unit: 'mes' },
    logo: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop',
    description: 'Constructora Delta es líder en el desarrollo de pavimentación industrial y vial de alta resistencia, utilizando materiales poliméricos de última generación. Nuestra experiencia en climas extremos garantiza la durabilidad.\n\nNuestras soluciones incluyen el diseño integral de zonas de carga pesada y patios de maniobras, cumpliendo con las normativas internacionales de seguridad vial y resistencia mecánica para el sector logístico.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1531834363484-93043f110753?q=80&w=500&auto=format&fit=crop', title: 'Mezcla Polimérica', description: 'Pavimento ultra-resistente diseñado para tráfico pesado constante.' },
      { image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=500&auto=format&fit=crop', title: 'Ingeniería Vial', description: 'Planificación de rutas industriales eficientes y duraderas.' },
      { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop', title: 'Drenaje Avanzado', description: 'Sistemas de evacuación de agua para patios de maniobras.' }
    ],
    pricing: [
      { level: 'Standard', quantity: '100-500 m²', unitPrice: '$55.00', leadTime: '20 días' },
      { level: 'Premium', quantity: '500+ m²', unitPrice: '$48.00', leadTime: '40 días' }
    ],
    metrics: { deliveryRate: 94.5, avgResponseTime: '< 12h', monthlyCapacity: '10k m²' },
    reviews: [
      { user: 'Juan Pablo E.', rating: 5, comment: 'La pavimentación resiste el peso de las grúas perfectamente.', date: '2026-02-01' },
      { user: 'Lucía Méndez', rating: 4, comment: 'Rápidos. Hubo un retraso menor por lluvia.', date: '2026-02-18' }
    ]
  },
  {
    id: 5623,
    name: 'Elite Workspace Gear',
    location: 'CDMX, MX',
    yearsOfExperience: 8,
    costRate: 2,
    category: 'marketing',
    verified: false,
    qualification: 4.6,
    favorite: false,
    minProduct: { value: 120, unit: 'ud' },
    logo: 'https://images.unsplash.com/photo-1539186607619-df476afeaff1?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    description: 'Elite Workspace Gear provee mobiliario para oficinas que buscan potenciar la productividad y el bienestar. Diseñamos espacios que fomentan la colaboración efectiva y la ergonomía avanzada.\n\nNuestra línea corporativa utiliza materiales sostenibles y tecnología de ajuste inteligente, adaptándose a las necesidades de las empresas tecnológicas que demandan flexibilidad y un diseño estético de vanguardia.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=500&auto=format&fit=crop', title: 'Sillas Ergo-X', description: 'Soportes lumbares inteligentes para jornadas laborales extendidas.' },
      { image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=500&auto=format&fit=crop', title: 'Escritorios Sit-Stand', description: 'Sistemas motorizados de altura ajustable para mayor dinamismo.' },
      { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop', title: 'Paneles Acústicos', description: 'Reducción de ruido ambiental para mayor concentración en equipos.' }
    ],
    pricing: [
      { level: 'Startup', quantity: '10-30 ud', unitPrice: '$210.00', leadTime: '10 días' },
      { level: 'Corporate', quantity: '50+ ud', unitPrice: '$185.00', leadTime: '25 días' }
    ],
    metrics: { deliveryRate: 97.2, avgResponseTime: '< 3h', monthlyCapacity: '5,000 uds' },
    reviews: [
      { user: 'Sofía Vergara', rating: 5, comment: 'Las sillas Ergo-X cambiaron la postura de mi equipo.', date: '2026-03-05' }
    ]
  },
  {
    id: 6433,
    name: 'EcoEnergy Systems',
    location: 'Quito, EC',
    yearsOfExperience: 10,
    costRate: 3,
    category: 'energy',
    verified: true,
    qualification: 5.0,
    favorite: false,
    minProduct: { value: 875, unit: 'm' },
    logo: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?q=80&w=1200&auto=format&fit=crop',
    description: 'EcoEnergy Systems lidera la transición hacia energías limpias en el sector industrial, especializándose en sistemas fotovoltaicos. Optimizamos su matriz energética con tecnología de monitoreo satelital.\n\nNuestros proyectos incluyen mantenimiento preventivo y aseguramos que su inversión se traduzca en ahorros reales y cumplimiento de metas de sostenibilidad globales para reducir la huella de carbono.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=500&auto=format&fit=crop', title: 'Huertos Solares', description: 'Instalaciones terrestres de alta eficiencia para fábricas masivas.' },
      { image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=500&auto=format&fit=crop', title: 'Baterías Ion-Litio', description: 'Respaldo energético para procesos industriales durante la noche.' },
      { image: 'https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?q=80&w=500&auto=format&fit=crop', title: 'Inversores Smart', description: 'Conversión de energía eficiente con diagnóstico remoto automático.' }
    ],
    pricing: [
      { level: 'Basic', quantity: '100-200 m²', unitPrice: '$150.00', leadTime: '30 días' },
      { level: 'Enterprise', quantity: '500+ m²', unitPrice: '$130.00', leadTime: '60 días' }
    ],
    metrics: { deliveryRate: 98.9, avgResponseTime: '< 6h', monthlyCapacity: '15 MW' },
    reviews: [
      { user: 'Hernán Darío', rating: 5, comment: 'Redujeron nuestra factura un 40%. Increíble servicio.', date: '2026-04-01' }
    ]
  },
  {
    id: 8842,
    name: 'CloudSync Solutions',
    location: 'Medellín, CO',
    yearsOfExperience: 6,
    costRate: 2,
    category: 'technology',
    verified: true,
    qualification: 4.9,
    favorite: false,
    minProduct: { value: 150, unit: 'mes' },
    logo: 'https://images.unsplash.com/photo-1563986768494-182b9730d71d?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    description: 'CloudSync Solutions ofrece una plataforma de gestión empresarial en la nube diseñada para el sector B2B. Facilitamos la interoperabilidad entre departamentos y la toma de decisiones basada en analítica.\n\nNuestro ecosistema incluye facturación electrónica masiva y control de inventarios automatizado, permitiendo que las empresas se enfoquen en su core business con total seguridad de datos.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=500&auto=format&fit=crop', title: 'Dashboard Analytics', description: 'Visualización de datos en tiempo real para gerencia estratégica.' },
      { image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500&auto=format&fit=crop', title: 'App Móvil B2B', description: 'Control de pedidos y stock desde cualquier dispositivo móvil.' },
      { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop', title: 'API Integration', description: 'Conexión sencilla con sistemas externos para flujo de datos.' }
    ],
    pricing: [
      { level: 'SaaS Basic', quantity: '10 users', unitPrice: '$150.00', leadTime: '1 día' },
      { level: 'Unlimited', quantity: '50+ users', unitPrice: '$450.00', leadTime: '3 días' }
    ],
    metrics: { deliveryRate: 99.9, avgResponseTime: '< 15m', monthlyCapacity: '10k subs' },
    reviews: [
      { user: 'Fernando Botero', rating: 5, comment: 'Automatización fantástica. Integración limpia y soporte rápido.', date: '2026-03-15' }
    ]
  },
  {
    id: 3190,
    name: 'AquaPur Industrial',
    location: 'Guadalajara, MX',
    yearsOfExperience: 18,
    costRate: 3,
    category: 'technology',
    verified: true,
    qualification: 4.8,
    favorite: false,
    minProduct: { value: 4500, unit: 'ud' },
    logo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1581094120913-2d461543883a?q=80&w=1200&auto=format&fit=crop',
    description: 'AquaPur Industrial se especializa en la remediación hídrica y purificación de agua para manufactura crítica. Ayudamos a las industrias a cumplir con las leyes ambientales más estrictas.\n\nNuestras plantas de tratamiento compactas permiten reutilizar hasta el 90% del agua residual, reduciendo significativamente los costos operativos y el impacto ambiental de procesos químicos masivos.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop', title: 'Filtros Cerámicos', description: 'Eliminación de micropartículas en flujos de agua masivos.' },
      { image: 'https://images.unsplash.com/photo-1541888941294-8267605d3b3c?q=80&w=500&auto=format&fit=crop', title: 'Osmosis Inversa', description: 'Purificación total para procesos de grado alimenticio.' },
      { image: 'https://images.unsplash.com/photo-1581094120913-2d461543883a?q=80&w=500&auto=format&fit=crop', title: 'Monitoreo Ph', description: 'Sistemas automáticos de control de acidez y alcalinidad.' }
    ],
    pricing: [
      { level: 'Medium', quantity: '1-5 plantas', unitPrice: '$5,200', leadTime: '45 días' },
      { level: 'Mega', quantity: '10+ plantas', unitPrice: '$4,800', leadTime: '90 días' }
    ],
    metrics: { deliveryRate: 96.4, avgResponseTime: '< 5h', monthlyCapacity: '120 plantas' },
    reviews: [
      { user: 'Guillermo Toro', rating: 5, comment: 'Agua 100% pura para procesos industriales complejos.', date: '2026-04-10' }
    ]
  },
  {
    id: 7214,
    name: 'Meridian Global Cargo',
    location: 'Buenos Aires, AR',
    yearsOfExperience: 30,
    costRate: 1,
    category: 'logistics',
    verified: false,
    qualification: 4.4,
    favorite: false,
    minProduct: { value: 850, unit: 'contenedor' },
    logo: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1494412574743-019475224a4d?q=80&w=1200&auto=format&fit=crop',
    description: 'Meridian Global Cargo es su aliado estratégico en comercio exterior, ofreciendo consolidación de carga marítima y despacho aduanal rápido. Facilitamos el acceso a mercados globales con eficiencia.\n\nContamos con agentes en los 5 continentes que aseguran que su mercancía sea manejada con estándares de cuidado, reduciendo costos mediante la optimización de espacios en contenedores compartidos.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1577705993349-8d8f0ff2f5a0?q=80&w=500&auto=format&fit=crop', title: 'Carga Marítima', description: 'Rutas internacionales con salidas semanales a Europa.' },
      { image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad21?q=80&w=500&auto=format&fit=crop', title: 'Broker Aduanal', description: 'Gestión documental para importaciones sin retrasos.' },
      { image: 'https://images.unsplash.com/photo-1494412574743-019475224a4d?q=80&w=500&auto=format&fit=crop', title: 'Seguro de Carga', description: 'Protección integral ante cualquier siniestro en tránsito marítimo.' }
    ],
    pricing: [
      { level: 'LCL', quantity: '1-3 pallets', unitPrice: '$1,200', leadTime: '35 días' },
      { level: 'FCL', quantity: 'Full Container', unitPrice: '$4,500', leadTime: '28 días' }
    ],
    metrics: { deliveryRate: 92.1, avgResponseTime: '< 8h', monthlyCapacity: '400 cont.' },
    reviews: [
      { user: 'Lionel M.', rating: 4, comment: 'Llegó todo en orden. El seguimiento es preciso.', date: '2026-03-28' }
    ]
  },
  {
    id: 1045,
    name: 'Textiles Andinos B2B',
    location: 'Lima, PE',
    yearsOfExperience: 40,
    costRate: 2,
    category: 'clothes',
    verified: true,
    qualification: 4.7,
    favorite: false,
    minProduct: { value: 300, unit: 'rollo' },
    logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop',
    description: 'Textiles Andinos B2B provee insumos de alta tecnología para la industria del vestuario y aplicaciones técnicas. Fusionamos tradición milenaria con procesos químicos modernos de teñido.\n\nNuestras lonas impermeables son utilizadas por las principales empresas de seguridad, cumpliendo con certificaciones de resistencia al fuego y durabilidad cromática en condiciones extremas.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=500&auto=format&fit=crop', title: 'Telas Ripstop', description: 'Materiales anti-desgarro para uniformes industriales.' },
      { image: 'https://images.unsplash.com/photo-1551029506-0807d4a21f68?q=80&w=500&auto=format&fit=crop', title: 'Tintado Masivo', description: 'Procesos de coloración eco-amigables con fijación.' },
      { image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500&auto=format&fit=crop', title: 'Hilados Técnicos', description: 'Fibras ignífugas para protección en entornos de alta temperatura.' }
    ],
    pricing: [
      { level: 'Retailer', quantity: '10-50 rollos', unitPrice: '$85.00', leadTime: '12 días' },
      { level: 'Factory', quantity: '100+ rollos', unitPrice: '$68.00', leadTime: '25 días' }
    ],
    metrics: { deliveryRate: 97.5, avgResponseTime: '< 4h', monthlyCapacity: '15k metros' },
    reviews: [
      { user: 'Gladys P.', rating: 5, comment: 'La tela Ripstop es la mejor para uniformes.', date: '2026-02-12' }
    ]
  },
  {
    id: 9932,
    name: 'BrandElevate Agency',
    location: 'Bogotá, CO',
    yearsOfExperience: 5,
    costRate: 3,
    category: 'marketing',
    verified: false,
    qualification: 4.6,
    favorite: false,
    minProduct: { value: 950, unit: 'campaña' },
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop',
    description: 'BrandElevate es una agencia boutique enfocada en marketing B2B para empresas industriales. Ayudamos a digitalizar su fuerza de ventas y expandir su presencia en mercados internacionales.\n\nNuestras estrategias de generación de leads cualificados aseguran que su equipo hable con tomadores de decisiones, optimizando el retorno de inversión y acortando ciclos de venta.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop', title: 'SEO Industrial', description: 'Posicionamiento estratégico para maquinaria y servicios.' },
      { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop', title: 'Lead Gen B2B', description: 'Captación de clientes mediante embudos automatizados.' },
      { image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=500&auto=format&fit=crop', title: 'ABM Strategy', description: 'Marketing basado en cuentas clave para clientes de alto valor.' }
    ],
    pricing: [
      { level: 'Setup', quantity: '3 months', unitPrice: '$1,200', leadTime: '15 días' },
      { level: 'Scale', quantity: '6+ months', unitPrice: '$950.00', leadTime: '30 días' }
    ],
    metrics: { deliveryRate: 98.2, avgResponseTime: '< 2h', monthlyCapacity: '30 cuentas' },
    reviews: [
      { user: 'James R.', rating: 5, comment: 'Leads aumentaron 300% en 6 meses. Impecable.', date: '2026-04-15' }
    ]
  },
  {
    id: 2855,
    name: 'HeavyMach Parts',
    location: 'São Paulo, BR',
    yearsOfExperience: 22,
    costRate: 2,
    category: 'construction',
    verified: true,
    qualification: 4.9,
    favorite: false,
    minProduct: { value: 45, unit: 'pieza' },
    logo: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=200&auto=format&fit=crop',
    cover: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop',
    description: 'HeavyMach Parts es el distribuidor líder de repuestos críticos para maquinaria pesada. Entendemos que cada hora de máquina parada es una pérdida masiva de capital para su proyecto.\n\nNuestro sistema de logística urgente permite enviar componentes hidráulicos y piezas de motor a cualquier mina o obra en menos de 48 horas, minimizando el tiempo de inactividad drásticamente.',
    highlights: [
      { image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7e8c?q=80&w=500&auto=format&fit=crop', title: 'Sistemas Hidráulicos', description: 'Bombas y válvulas de alta presión para excavadoras.' },
      { image: 'https://images.unsplash.com/photo-1581094394435-90022765163b?q=80&w=500&auto=format&fit=crop', title: 'Kits de Motor', description: 'Repuestos certificados para motores diésel de potencia.' },
      { image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500&auto=format&fit=crop', title: 'Orugas Reforzadas', description: 'Cadenas de tracción de alta resistencia para terrenos abrasivos.' }
    ],
    pricing: [
      { level: 'Critical', quantity: '1-5 piezas', unitPrice: '$540.00', leadTime: '48h' },
      { level: 'Stock', quantity: '20+ piezas', unitPrice: '$420.00', leadTime: '10 días' }
    ],
    metrics: { deliveryRate: 99.5, avgResponseTime: '< 1h', monthlyCapacity: '8,000 SKUs' },
    reviews: [
      { user: 'Álvaro U.', rating: 5, comment: 'Llegó en menos de 24h a la mina. Salvaron el día.', date: '2026-03-30' }
    ]
  }
];