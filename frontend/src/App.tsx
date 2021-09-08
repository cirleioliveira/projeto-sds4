//import BarChart from "components/BarChart";
//import DataTable from "components/DataTable";
//import DonutChart from "components/DonutChart";
//import Footer from "components/Footer";
//import NavBar from "components/NavBar";

function App() {
  return (
    /*Utilizando o fragment pra retornar múltiplos elementos*/
    <>
      
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>

       
      </div>
      
    </>
  );
}

export default App;
