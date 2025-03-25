import { AspectRatio } from "./ui/aspect-ratio";
import { specialSectionsStyles } from "../styles/SpecialSections.styles";

const SpecialSections = () => {
  return (
    <div className={specialSectionsStyles.container}>
      <div className={specialSectionsStyles.contentWrapper}>
        <h2 className={specialSectionsStyles.title}>Editorias exclusivas para a sua marca:</h2>
        <p className={specialSectionsStyles.subtitle}>
          Espaços específicos para nossos parceiros, com entrega direta de conteúdo para o público alvo
        </p>
        
        <div className={specialSectionsStyles.grid}>
          <div>
            <p className={specialSectionsStyles.description.container}>
              A plataforma <span className={specialSectionsStyles.description.bold}>Agro é DNews</span>, traz as principais novidades no 
              agronegócio, pesquisas, técnicas e manejos, especialistas, 
              entrevistas, cotações diárias, notícias e a cobertura dos 
              principais eventos do agro na região.
            </p>
            
            <p className={specialSectionsStyles.description.container}>
              <span className={specialSectionsStyles.description.bold}>RH DNews</span> nasceu para atender o parceiro na divulgação de 
              vagas de emprego, oportunidades, informações sobre o 
              mercado de trabalho, matérias especiais, novidades, entre 
              outros + <span className={specialSectionsStyles.description.bold}>EDITAIS</span>.
            </p>
            
            <p className={specialSectionsStyles.description.container}>
              Os <span className={specialSectionsStyles.description.bold}>Cadernos</span> são espaços específicos para os nossos parceiros, 
              com entrega direta de conteúdo para o público alvo, além de 
              qualidade e informação para nossos leitores. Além de produzir 
              um conteúdo segmentado, estão divididos em categorias que 
              ficam em destaque conforme o dia da semana, atendendo o 
              parceiro de forma exclusiva no dia escolhido.
            </p>
            
            <div className={specialSectionsStyles.logo.container}>
              <img 
                alt="Logo Dourados News 24 Anos" 
                className={specialSectionsStyles.logo.image} 
                src="/lovable-uploads/26e8c454-9afe-4a7e-9b87-e8d29e3c4bd2.jpg" 
              />
            </div>
          </div>
          
          <div className={specialSectionsStyles.imagesGrid}>
            <div>
              <AspectRatio ratio={3 / 4} className={specialSectionsStyles.aspectRatio}>
                <img 
                  alt="Agro é DNews" 
                  className={specialSectionsStyles.image} 
                  src="/lovable-uploads/0b373dd5-46f3-455d-a2a3-491a610fea10.jpg" 
                />
              </AspectRatio>
            </div>
            <div>
              <AspectRatio ratio={3 / 4} className={specialSectionsStyles.aspectRatio}>
                <img 
                  src="/lovable-uploads/6b00d601-d8a9-4128-bcce-300c8f36c869.png" 
                  alt="RH DNews" 
                  className={specialSectionsStyles.image} 
                />
              </AspectRatio>
            </div>
            <div className={specialSectionsStyles.cadernosGrid}>
              <div className={specialSectionsStyles.cadernosHeader}>
                <p className={specialSectionsStyles.cadernosTitle}>Cadernos</p>
              </div>
              <div className={specialSectionsStyles.cadernosItem}>
                <p className={specialSectionsStyles.cadernosText}>HappyHour</p>
              </div>
              <div className={specialSectionsStyles.cadernosItem}>
                <p className={specialSectionsStyles.cadernosText}>Educação</p>
              </div>
              <div className={specialSectionsStyles.cadernosItem}>
                <p className={specialSectionsStyles.cadernosText}>Negócios & Cia</p>
              </div>
              <div className={specialSectionsStyles.cadernosWide}>
                <p className={specialSectionsStyles.cadernosText}>Saúde & Bem-Estar</p>
              </div>
              <div className={specialSectionsStyles.cadernosWide}>
                <p className={specialSectionsStyles.cadernosText}>Beleza & Estética</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSections;