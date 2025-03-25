import { livesEventsStyles } from "../styles/LivesEvents.styles";

const LivesEvents = () => {
  return (
    <div className={livesEventsStyles.container}>
      <div className={livesEventsStyles.contentWrapper}>
        <div className={livesEventsStyles.header}>
          <h2 className={livesEventsStyles.headerTitle}>Lives Comerciais & Cobertura de Eventos</h2>
        </div>
        
        <div className={livesEventsStyles.galleryGrid}>
          <div className={livesEventsStyles.galleryCard}>
            <div className={livesEventsStyles.galleryImageContainer}>
              <img 
                alt="Cobertura de evento" 
                className={livesEventsStyles.galleryImage} 
                src="/lovable-uploads/6d93b3d7-3937-4126-b401-243f91cae568.jpg" 
              />
            </div>
            <div className={livesEventsStyles.galleryFooter}>
              
            </div>
          </div>
          
          <div className={livesEventsStyles.galleryCard}>
            <div className={livesEventsStyles.galleryImageContainer}>
              <img 
                alt="Live exemplo 1" 
                className={livesEventsStyles.galleryImage} 
                src="/lovable-uploads/e73eea70-999f-4106-8bc2-44dc801b698f.jpg" 
              />
            </div>
            <div className={livesEventsStyles.galleryFooter}>
              
            </div>
          </div>
          
          <div className={livesEventsStyles.galleryCard}>
            <div className={livesEventsStyles.galleryImageContainer}>
              <img 
                alt="Live exemplo 2" 
                className={livesEventsStyles.galleryImage} 
                src="/lovable-uploads/fe395c67-d5f1-4c2c-bfb5-deab90b22051.jpg" 
              />
            </div>
            <div className={livesEventsStyles.galleryFooter}>
              
            </div>
          </div>
        </div>
        
        <div className={livesEventsStyles.infoCard}>
          <div className={livesEventsStyles.infoGrid}>
            <div className={livesEventsStyles.infoContent}>
              <div className={livesEventsStyles.infoSection}>
                <div>
                  <h3 className={livesEventsStyles.infoBlock.title}>Descrição:</h3>
                  <p className={livesEventsStyles.infoBlock.text}>
                    Realizada em formato "Ao Vivo" na empresa ou evento, buscando demonstrar ao público quais produtos ou serviços disponibilizados.
                  </p>
                </div>
                
                <div>
                  <h3 className={livesEventsStyles.infoBlock.title}>Propósito:</h3>
                  <p className={livesEventsStyles.infoBlock.text}>
                    Gerar interação, envolvimento e interesse por sua empresa através da publicidade por meio de fotos, vídeos e transmissões ao vivo.
                  </p>
                </div>
                
                <div>
                  <h3 className={livesEventsStyles.infoBlock.title}>Mídia Social:</h3>
                  <p className={livesEventsStyles.infoBlock.text}>
                    Facebook e Instagram com alcance milionário.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={livesEventsStyles.socialGrid}>
              <div className={livesEventsStyles.socialImageGrid}>
                <div className={livesEventsStyles.socialImageContainer}>
                  <img 
                    alt="Exemplo de post em redes sociais" 
                    className={livesEventsStyles.socialImage} 
                    src="/lovable-uploads/c45bf28e-55a3-4017-a14f-d4c9578eb377.jpg" 
                  />
                </div>
                <div className={livesEventsStyles.socialImageContainer}>
                  <div className={livesEventsStyles.socialSubGrid}>
                    <div>
                      
                    </div>
                    <div>
                      
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivesEvents;