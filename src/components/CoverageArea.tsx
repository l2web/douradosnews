import { AspectRatio } from "./ui/aspect-ratio";
import { coverageAreaStyles } from "../styles/CoverageArea.styles";

const CoverageArea = () => {
  return (
    <div className={coverageAreaStyles.container}>
      <div className={coverageAreaStyles.contentWrapper}>
        <div className={coverageAreaStyles.gridContainer}>
          <div>
            <h2 className={coverageAreaStyles.title}>O maior site do interior do MS.</h2>
            <div className={coverageAreaStyles.citiesGrid}>
              <div className={`${coverageAreaStyles.cityCard} ${coverageAreaStyles.cityCardPrimary}`}>
                <h3 className={coverageAreaStyles.cityTitle}>Dourados</h3>
              </div>
              <div className={`${coverageAreaStyles.cityCard} ${coverageAreaStyles.cityCardSecondary}`}>
                <h3 className={coverageAreaStyles.cityTitle}>Campo Grande</h3>
              </div>
              <div className={`${coverageAreaStyles.cityCard} ${coverageAreaStyles.cityCardPrimary}`}>
                <h3 className={coverageAreaStyles.cityTitle}>Ponta Porã</h3>
              </div>
              <div className={`${coverageAreaStyles.cityCard} ${coverageAreaStyles.cityCardSecondary}`}>
                <h3 className={coverageAreaStyles.cityTitle}>Três Lagoas</h3>
              </div>
              <div className={`${coverageAreaStyles.cityCard} ${coverageAreaStyles.cityCardPrimary} ${coverageAreaStyles.cityCardFullWidth}`}>
                <h3 className={coverageAreaStyles.cityTitle}>Nova Andradina + 30 Municípios</h3>
              </div>
            </div>
            
            <p className={coverageAreaStyles.statsText}>+ Estados</p>
            <p className={coverageAreaStyles.statsText}>+ 10 Países</p>
            <p className={coverageAreaStyles.statsBold}>Público atingido ao total: + de 5 milhões de contas alcançadas*</p>
            
            <p className={coverageAreaStyles.description}>
              O Dourados News foi criado nos anos 2000, uma empresa jornalística pioneira 
              em conteúdo informativo digital e se tornou o site de notícias mais acessado 
              de DOURADOS e do interior do Mato Grosso do Sul. A cada ano que passa, 
              aumenta a sua audiência com credibilidade e transparência.
            </p>
            
            <p className={coverageAreaStyles.ctaText}>Conheça alguns produtos nas próximas páginas!</p>
          </div>
          
          <div>
            <AspectRatio ratio={1 / 1} className={coverageAreaStyles.mapContainer}>
              <div className={coverageAreaStyles.mapWrapper}>
                <div className={coverageAreaStyles.mapInner}>
                  <img 
                    alt="Mapa de alcance" 
                    className={coverageAreaStyles.mapImage} 
                    src="/lovable-uploads/c81c6a99-c151-4a0c-b5bc-4a2d37e18c00.jpg" 
                  />
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageArea;