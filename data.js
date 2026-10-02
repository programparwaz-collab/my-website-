export const SITE = { name: 'Parwaz Digital', url: 'https://parwaz-digital.vercel.app', phone: '03209115352', email: 'parwazdigietal@gmail.com' };
export const cities = ['Islamabad','Rawalpindi','Peshawar','Attock','KPK','Lahore','Karachi','Faisalabad','Multan','Quetta','Sialkot','Abbottabad'].map(n => ({ name: n, slug: n.toLowerCase() }));
export const services = [
  { slug:'custom-web-development', icon:'💻', title:'Custom Web Development', text:'Fast, secure websites and web apps built in Next.js, React and Node.js around your business.' },
  { slug:'seo-services', icon:'🔍', title:'SEO Services', text:'Technical SEO, keyword research and content that moves you up Google search results.' },
  { slug:'shopify-development', icon:'🛍️', title:'Shopify Development', text:'Shopify stores, custom themes and app integrations that convert visitors into buyers.' },
  { slug:'wordpress-development', icon:'📝', title:'WordPress Development', text:'Custom WordPress themes, plugins and speed optimization you can manage yourself.' },
  { slug:'woocommerce-development', icon:'🛒', title:'WooCommerce Development', text:'Online stores on WordPress with local payment gateways and delivery setup.' },
  { slug:'ai-app-development', icon:'🤖', title:'AI App Development', text:'AI-powered apps, chatbots and tools built on modern language models.' },
  { slug:'ai-automation', icon:'⚙️', title:'AI Automation', text:'Automate leads, support, reporting and repetitive work so your team saves hours.' },
];
