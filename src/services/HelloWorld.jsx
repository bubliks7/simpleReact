import { useState } from 'react'

function App(){
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        setLoading(true);
        try{
            const response = await fetch('http://127.0.0.1:8000/api/generate');
            const result = await response.json();

            setData(result.message);
        } catch (error){
            console.error('Error', error);
        } finally{
            setLoading(false);
        }
    }

    return(
        <div>
            <button onClick={generate} disabled={loading}>
                {loading ? 'Generowanie...' : 'Wygeneruj'}
            </button>

            {data && <p>Odpowiedz: {data}</p>}
        </div>
    )
}

export default App;
