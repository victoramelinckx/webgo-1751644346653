
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Transforma tu negocio con nuestro curso de ventas, web lista en un día y soporte constante." cta1="Inscríbete Ahora" />
<How step1Title="Inscríbete" step1Desc="Empieza digitalización en 3 semanas." step2Title="Aprende Estrategias" step2Desc="Domina ventas online eficazmente." step3Title="Web en 24h" step3Desc="Lanza tu sitio con soporte continuo." />
<Aboutus headline="WebGo: Digitaliza y Aumenta Ventas" subheadline="Transformamos recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Ventas Simplificadas" beneficio1="Curso de ventas elimina la incertidumbre." beneficiotitulo2="Gestión Eficiente" beneficio2="Olvídate de manejar el sitio web." />
<Services heading="Transforma Recomendaciones en Ventas Digitales" description="Curso online de 3 semanas que simplifica tus ventas en la web." services={[{"name":"Creación Express","icon":"rocket","description":"Web lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad en línea."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita ventas con pagos online."},{"name":"Gestión Simplificada","icon":"clipboard-list","description":"Administra tus ventas sin complicaciones."},{"name":"Análisis de Datos","icon":"chart-line","description":"Conoce y mejora tu rendimiento."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web impactantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede el Curso de Ventas de WebGo ayudarme a digitalizar mis ventas?","respuesta":"Nuestro Curso de Ventas te enseña a generar ventas online en solo 3 semanas. Aprenderás técnicas probadas para atraer clientes digitales, lo que te permitirá expandir tu negocio más allá de las recomendaciones."},{"pregunta":"¿Qué beneficios obtengo al tomar el curso de WebGo si no tengo tiempo para gestionar un sitio web?","respuesta":"El curso está diseñado para ser eficiente, con lecciones que se adaptan a tu horario. Además, aprenderás estrategias que te ahorrarán tiempo al automatizar partes de tu proceso de ventas online."},{"pregunta":"¿El Curso de Ventas de WebGo es adecuado para alguien que no tiene experiencia en ventas online?","respuesta":"Sí, el curso está hecho para principiantes. Te llevamos de la mano desde los conceptos básicos hasta las estrategias avanzadas, asegurando que puedas implementar lo aprendido de inmediato."},{"pregunta":"¿Cuánto cuesta el Curso de Ventas de WebGo y qué incluye?","respuesta":"El curso cuesta 123 e incluye acceso completo a todas las lecciones online, materiales descargables y soporte personalizado para resolver tus dudas durante las 3 semanas."},{"pregunta":"¿Qué diferencia al Curso de Ventas de WebGo de otros cursos online?","respuesta":"A diferencia de otros cursos, WebGo se centra en resultados prácticos y rápidos para pequeños negocios. Nuestro enfoque directo y personalizado te asegura aprender lo que realmente funciona en ventas digitales."}]} />
<BookAppointment 
                      heading="Digitaliza tus Ventas y Triplica tus Clientes" 
                      description="Transforma tu negocio con nuestro Curso de Ventas online por solo 123. Aprende a generar ventas digitales efectivas en solo 3 semanas."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
