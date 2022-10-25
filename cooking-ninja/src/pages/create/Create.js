import  {useEffect, useRef, useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';

//style
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientsInput = useRef(null);

  const history = useHistory();

  const {postData, data} = useFetch('http://localhost:3000/recipes', 'POST')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({title, method, ingredients, cookingTime:cookingTime + ' minutes'})
  }

  useEffect(() => {
    if (data){
      history.push("/");
    }
  }, [data])

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing]  )
    }

    setNewIngredient('');
    ingredientsInput.current.focus();
    
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type = "text"
            onChange = {(e) => setTitle(e.target.value)}
            value = {title}
            required
          />
        </label>

        
        <label>
          <span>Recipe Ingredients:</span>
            <div className='ingredients'>
              <input
                type = "text"
                onChange = {(e) => setNewIngredient(e.target.value)}
                value = {newIngredient}
                ref = {ingredientsInput}
              />
              <button className="btn" onClick={handleAdd}>Add</button>
            </div>
          </label>
          <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
        

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange = {(e) => setMethod(e.target.value)}
            value = {method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes): </span>
          <input
            type = "number"
            onChange = {(e) => setCookingTime(e.target.value)}
            value = {cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>

      </form>
    </div>
  )
}
