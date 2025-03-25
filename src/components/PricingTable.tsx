import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
import { pricingTableStyles } from "../styles/PricingTable.styles";

const PricingTable = () => {
  return (
    <div className={pricingTableStyles.container}>
      <div className={pricingTableStyles.contentWrapper}>
        <div className={pricingTableStyles.header}>
          <h2 className={pricingTableStyles.headerTitle}>TABELA COMERCIAL | PUBLICIDADE</h2>
        </div>
        
        <div className={pricingTableStyles.pricingGrid}>
          {/* Pricing Card 1 */}
          <Card className={pricingTableStyles.card}>
            <CardHeader className={pricingTableStyles.cardHeader}>
              <CardTitle className={pricingTableStyles.cardTitle}>Full Banner, Square e Mega Banner</CardTitle>
              <p className={pricingTableStyles.cardSubtitle}>Tabela de Valores Promocional</p>
            </CardHeader>
            <CardContent className={pricingTableStyles.cardContent}>
              <div className={pricingTableStyles.pricingList}>
                <div className={pricingTableStyles.pricingItem}>
                  <div>
                    <h3 className={pricingTableStyles.pricingInfo.title}>30 dias</h3>
                    <p className={pricingTableStyles.pricingInfo.description}>Inserções diárias + 01 bonificação em Informe Publicitário</p>
                  </div>
                  <div className={pricingTableStyles.pricingValue}>
                    <p className={pricingTableStyles.price}>R$ 3.980,00</p>
                  </div>
                </div>
                
                <div className={pricingTableStyles.pricingItem}>
                  <div>
                    <h3 className={pricingTableStyles.pricingInfo.title}>60 dias (2 meses)</h3>
                    <p className={pricingTableStyles.pricingInfo.description}>Inserções diárias</p>
                  </div>
                  <div className={pricingTableStyles.pricingValue}>
                    <span className={pricingTableStyles.discountBadge}>15% OFF</span>
                    <p className={pricingTableStyles.price}>R$ 3.380,00</p>
                  </div>
                </div>
                
                <div className={pricingTableStyles.pricingItem}>
                  <div>
                    <h3 className={pricingTableStyles.pricingInfo.title}>90 dias (3 meses)</h3>
                    <p className={pricingTableStyles.pricingInfo.description}>Inserções diárias</p>
                  </div>
                  <div className={pricingTableStyles.pricingValue}>
                    <span className={pricingTableStyles.discountBadge}>20% OFF</span>
                    <p className={pricingTableStyles.price}>R$ 3.180,00</p>
                  </div>
                </div>
                
                <div className={pricingTableStyles.pricingItem}>
                  <div>
                    <h3 className={pricingTableStyles.pricingInfo.title}>180 dias (6 meses)</h3>
                    <p className={pricingTableStyles.pricingInfo.description}>Inserções diárias</p>
                  </div>
                  <div className={pricingTableStyles.pricingValue}>
                    <span className={pricingTableStyles.discountBadge}>25% OFF</span>
                    <p className={pricingTableStyles.price}>R$ 2.980,00</p>
                  </div>
                </div>
                
                <div className={pricingTableStyles.pricingItem}>
                  <div>
                    <h3 className={pricingTableStyles.pricingInfo.title}>Anual (12 meses)</h3>
                    <p className={pricingTableStyles.pricingInfo.description}>Inserções diárias</p>
                  </div>
                  <div className={pricingTableStyles.pricingValue}>
                    <span className={pricingTableStyles.discountBadge}>60% OFF</span>
                    <p className={pricingTableStyles.price}>R$ 2.300,00</p>
                  </div>
                </div>
                
                <p className={pricingTableStyles.note}>Obs: Proposta válida por 15 dias após envio ao cliente em 2025.</p>
              </div>
            </CardContent>
            <CardFooter>
              <a 
                href="https://wa.me/5567991511383" 
                target="_blank" 
                rel="noopener noreferrer"
                className={pricingTableStyles.cardFooter}
              >
                Contratar Agora
              </a>
            </CardFooter>
          </Card>
          
          {/* Pricing Card 2 */}
          <Card className={pricingTableStyles.card}>
            <CardHeader className={pricingTableStyles.cardHeader}>
              <CardTitle className={pricingTableStyles.cardTitle}>Giro de Banners</CardTitle>
              <p className={pricingTableStyles.cardSubtitle}>Pacote Promocional: Banner Vitrine (Giro)</p>
            </CardHeader>
            <CardContent className={pricingTableStyles.cardContent}>
              <p className="mb-4 text-gray-700">
                A sua empresa tem a oportunidade em divulgar a marca em 03 dos nossos principais banners do site, em posicionamentos alternados.
              </p>
              
              <div className={pricingTableStyles.featuresList}>
                <div className={pricingTableStyles.featureItem}>
                  <Check className={pricingTableStyles.checkIcon} />
                  <p>3x na semana na Vitrine</p>
                </div>
                <div className={pricingTableStyles.featureItem}>
                  <Check className={pricingTableStyles.checkIcon} />
                  <p>3x na semana no Square Banner</p>
                </div>
                <div className={pricingTableStyles.featureItem}>
                  <Check className={pricingTableStyles.checkIcon} />
                  <p>1x na semana no Mega Banner</p>
                </div>
                <div className={pricingTableStyles.featureItem}>
                  <Check className={pricingTableStyles.checkIcon} />
                  <p>2 (duas) matérias mensais, uma a cada quinze dias no Informe Destaque (matérias também inseridas nas redes sociais)</p>
                </div>
                <div className={pricingTableStyles.featureItem}>
                  <Check className={pricingTableStyles.checkIcon} />
                  <p>Redes sociais disponíveis 1x na semana, Facebook e Instagram - feed e story</p>
                </div>
              </div>
              
              <div className={pricingTableStyles.originalPrice.container}>
                <p className={pricingTableStyles.originalPrice.label}>Valor do Investimento Mensal (sem desconto)</p>
                <p className={pricingTableStyles.originalPrice.price}>R$ 12.136,00</p>
              </div>
              
              <div className={pricingTableStyles.promotionalPrice.container}>
                <p className={pricingTableStyles.promotionalPrice.label}>Pacote Promocional</p>
                <p className={pricingTableStyles.promotionalPrice.price}>R$ 6.170,00 - mensal</p>
                <p className={pricingTableStyles.promotionalPrice.note}>(contratos de 6 a 12 meses)</p>
              </div>
            </CardContent>
            <CardFooter>
              <a 
                href="https://wa.me/5567991511383" 
                target="_blank" 
                rel="noopener noreferrer"
                className={pricingTableStyles.cardFooter}
              >
                Contratar Agora
              </a>
            </CardFooter>
          </Card>
          
          {/* Pricing Card 3 */}
          <Card className={pricingTableStyles.card}>
            <CardHeader className={pricingTableStyles.cardHeader}>
              <CardTitle className={pricingTableStyles.cardTitle}>Cadernos</CardTitle>
              <p className={pricingTableStyles.cardSubtitle}>Marketing de Conteúdo Segmentado</p>
            </CardHeader>
            <CardContent className={pricingTableStyles.cardContent}>
              <p className="mb-4 text-gray-700">
                Matérias com marketing de conteúdo no espaço "Cadernos". Segmentos: Negócios e Cia, Beleza & Estética, Saúde & Bem Estar, Setor Imobiliário, Happy Hour, Educação e demais segmentos.
              </p>
              
              <div className={pricingTableStyles.bonusContainer.container}>
                <div className={pricingTableStyles.bonusContainer.header}>
                  <h4 className={pricingTableStyles.bonusContainer.title}>Benefício Incluído:</h4>
                  <span className={pricingTableStyles.bonusContainer.badge}>BÔNUS</span>
                </div>
                <p className={pricingTableStyles.bonusContainer.description}>01 matéria semanal no Caderno escolhido.</p>
                <p className={pricingTableStyles.bonusContainer.note}>INSERÇÕES NO FACEBOOK E INSTAGRAM (FEED E STORIES) NO DIA DA PUBLICAÇÃO DO MARKETING DE CONTEÚDO NO CADERNO SELECIONADO.</p>
              </div>
              
              <div className={pricingTableStyles.productionCost.container}>
                <p className={pricingTableStyles.productionCost.label}>Investimento para produção:</p>
                <p className={pricingTableStyles.productionCost.price}>R$ 280,00 cada mês</p>
              </div>
              
              <div className={pricingTableStyles.promotionalPrice.container}>
                <p className={pricingTableStyles.promotionalPrice.label}>Pacote Promocional</p>
                <p className={pricingTableStyles.promotionalPrice.price}>R$ 1.600,00 - mensal</p>
              </div>
            </CardContent>
            <CardFooter>
              <a 
                href="https://wa.me/5567991511383" 
                target="_blank" 
                rel="noopener noreferrer"
                className={pricingTableStyles.cardFooter}
              >
                Contratar Agora
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
