import Search from "./components/search"
import Forecast from "./components/Forecast"
import useForecast  from "./components/hooks/useForecast"
const App = (): JSX.Element => {
  const{
    term,
  options,
  forecast,
  onInputChange,
  onOptionSelect,
  onsubmit,  
  }=useForecast()
  
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast?(
        <Forecast data={forecast}/>
      ):(
      <Search
      term={term}
      options={options}
      onInputChange={onInputChange}
      onOptionSelect={onOptionSelect}
      onSubmit={onsubmit}
      />
      )}
    </main>
  )
}

export default App
