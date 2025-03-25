import { statsStyles } from "../styles/Stats.styles";

const Stats = () => {
  return (
    <div className={statsStyles.container}>
      <div className={statsStyles.contentWrapper}>
        <div className={statsStyles.grid}>
          <div className={statsStyles.column}>
            <h2 className={statsStyles.title.main}>+ DE 2 MILHÕES DE VISUALIZAÇÕES</h2>
            <h3 className={statsStyles.title.sub}>MENSAIS NO SITE</h3>
            <p className={statsStyles.source}>FONTE: GOOGLE ANALYTICS</p>
            
            <h2 className={statsStyles.title.main}>+ DE 3 MILHÕES DE CONTAS ALCANÇADAS</h2>
            <h3 className={statsStyles.title.sub}>NO FACEBOOK E INSTAGRAM</h3>
            <p className={statsStyles.source}>TRÁFEGO ORGÂNICO</p>
            
            <div className={statsStyles.divider}></div>
            
            <h2 className={statsStyles.title.small}>NOTÍCIAS E MUITO MAIS:</h2>
            
            <div className={statsStyles.featuresGrid}>
              <div className={statsStyles.feature.container}>
                <div className={`${statsStyles.feature.icon.container} ${statsStyles.feature.icon.yellow}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className={statsStyles.feature.text}>Lives</span>
              </div>
              
              <div className={statsStyles.feature.container}>
                <div className={`${statsStyles.feature.icon.container} ${statsStyles.feature.icon.orange}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className={statsStyles.feature.text}>Cadernos Segmentados</span>
              </div>
              
              <div className={statsStyles.feature.container}>
                <div className={`${statsStyles.feature.icon.container} ${statsStyles.feature.icon.orange}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 7H6V15H10V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 7H14V11H18V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className={statsStyles.feature.text}>Anúncios</span>
              </div>
              
              <div className={statsStyles.feature.container}>
                <div className={`${statsStyles.feature.icon.container} ${statsStyles.feature.icon.blue}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H2M22 6H2M22 18H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className={statsStyles.feature.text}>Banners</span>
              </div>
            </div>
          </div>
          
          <div className={statsStyles.column}>
            <div className={statsStyles.image.container}>
              <img 
                alt="Estatísticas Facebook" 
                className={statsStyles.image.img} 
                src="/lovable-uploads/18fc1694-4207-47c1-a564-6ad37af24baf.jpg" 
              />
            </div>
            
            <div className={statsStyles.followers.container}>
              <div className={statsStyles.followers.wrapper}>
                <div className={statsStyles.followers.number}>+200k</div>
                <div className={statsStyles.followers.label}>Seguidores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;