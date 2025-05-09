import{ useState } from 'react';

function Aside({setSelectedCategory}) {
    const [selectedCategory, setCategory] = useState('');

    const handleCategoryClick = (category) => {
        setCategory(category);
        setSelectedCategory(category);
    };
    

    return (
        <aside>
            <div className ="aside">
                <h2>Категории</h2>
                <ul className="aside-list">
                    <li className="aside-list-cakes" onClick={() => handleCategoryClick('Торты')}>Торты</li>
                    <li className="aside-list-icecream" onClick={() => handleCategoryClick('Мороженое')}>Мороженое</li>
                    <li className="aside-list-fruits" onClick={() => handleCategoryClick('Фрукты')}>Фрукты</li>
                </ul>                    
            </div>
        </aside>
    );
}

    export default Aside;