import { productsStyles } from "../styles/Products.styles";

const Products = () => {
  return (
    <div className={productsStyles.container}>
      <div className={productsStyles.contentWrapper}>
        <h2 className={productsStyles.title}>
          No Dourados News você tem mais de 15 produtos disponíveis para potencializar a sua marca!
        </h2>
        
        <div className={productsStyles.grid}>
          <div className={productsStyles.productsList}>
            <div>
              <div className={productsStyles.productItem.container}>
                <div className={productsStyles.productItem.icon.container}>
                  <svg className={productsStyles.productItem.icon.svg} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className={productsStyles.productItem.content.title}>Banners Publicitários no Site</h3>
                  <p className={productsStyles.productItem.content.description}>
                    O principal produto do site está em todas as páginas de notícias e veicula 24h/dia. A única distância do nosso leitor para a sua marca está em apenas um clique. São 07 opções de tamanhos e posicionamentos.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className={productsStyles.productItem.container}>
                <div className={productsStyles.productItem.icon.container}>
                  <svg className={productsStyles.productItem.icon.svg} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className={productsStyles.productItem.content.title}>Informes Publicitários ( Matérias pagas)</h3>
                  <p className={productsStyles.productItem.content.description}>
                    A melhor forma de conectar o leitor com a sua marca: contando a história da sua empresa e produtos/serviços disponíveis. A matéria fica em evidência durante 24h no "Destaque Lateral" do site, na "Vitrine" ou na "Lista de Notícias".
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className={productsStyles.productItem.container}>
                <div className={productsStyles.productItem.icon.container}>
                  <svg className={productsStyles.productItem.icon.svg} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className={productsStyles.productItem.content.title}>Cadernos Segmentados</h3>
                  <p className={productsStyles.productItem.content.description}>
                    Conteúdo divulgado semanalmente nos editorias personalizados. Cada parceiro possui um dia exclusivo para potencializar a sua marca no Dourados News e nas mídias sociais. São 06 segmentos disponíveis com bonificação em Painel de Led.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className={productsStyles.productItem.container}>
                <div className={productsStyles.productItem.icon.container}>
                  <svg className={productsStyles.productItem.icon.svg} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className={productsStyles.productItem.content.title}>PubliPost em Instagram e Facebook + LIVES</h3>
                  <p className={productsStyles.productItem.content.description}>
                    Divulgamos as publicações da sua marca em nossas mídias sociais. O alcance geral do Facebook Dourados News passa de 3 milhões e do Instagram + de 300 mil contas alcançadas/mês, além de Lives e Transmissões AO VIVO em sua empresa!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={productsStyles.iconsGrid}>
            <div className={productsStyles.iconContainer}>
              <div className={`${productsStyles.iconWrapper.container} ${productsStyles.iconWrapper.orange}`}>
                <img 
                  src="/lovable-uploads/157ae322-55d8-4004-abab-372b82d7b28c.png" 
                  alt="Logo Dourados News" 
                  className={productsStyles.iconWrapper.image}
                />
              </div>
            </div>
            
            <div className={productsStyles.iconContainer}>
              <div className={`${productsStyles.iconWrapper.container} ${productsStyles.iconWrapper.blue}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={productsStyles.iconWrapper.svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 1 0-16 0" />
                  <path d="M12 11v2" />
                  <path d="M10 13h4" />
                </svg>
              </div>
            </div>
            
            <div className={productsStyles.iconContainer}>
              <div className={`${productsStyles.iconWrapper.container} ${productsStyles.iconWrapper.orange}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={productsStyles.iconWrapper.svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            
            <div className={productsStyles.iconContainer}>
              <div className={`${productsStyles.iconWrapper.container} ${productsStyles.iconWrapper.blue}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={productsStyles.iconWrapper.svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />
                </svg>
              </div>
            </div>
            
            <div className={`${productsStyles.iconContainer} ${productsStyles.fullWidthIcon}`}>
              <div className={`${productsStyles.iconWrapper.container} ${productsStyles.iconWrapper.orange}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={productsStyles.iconWrapper.svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
