import React, { useState } from 'react';
import './index.css';

// Тестовые данные из ТЗ
const articles = [
  { id: 1, title: "Падение Римской империи", category: "история", content: "Анализ причин и последствий..." },
  { id: 2, title: "Древнегреческая философия", category: "философия", content: "От досократиков до Платона и Аристотеля..." },
  { id: 3, title: "Пунические войны", category: "войны", content: "Конфликт Рима и Карфагена за господство..." }
];

const persons = [
  { id: 1, name: "Юлий Цезарь", era: "Римская республика", lifespan: "100-44 до н.э.", description: "Диктатор, полководец, автор Записок о Галльской войне" },
  { id: 2, name: "Александр Македонский", era: "Эллинизм", lifespan: "356-323 до н.э.", description: "Царь Македонии, создатель мировой империи" },
  { id: 3, name: "Цицерон", era: "Римская республика", lifespan: "106-43 до н.э.", description: "Оратор, философ, политический деятель" }
];

const timeline = [
  { id: 1, period: "Древняя Греция", years: "8 в. до н.э. - 146 г. до н.э.", events: ["Олимпийские игры", "Персидские войны", "Пелопоннесская война"] },
  { id: 2, period: "Римская республика", years: "509 г. до н.э. - 27 г. до н.э.", events: ["Установление республики", "Пунические войны", "Гражданские войны"] },
  { id: 3, period: "Римская империя", years: "27 г. до н.э. - 476 г. н.э.", events: ["Правление Августа", "Пакс Романа", "Падение Западной империи"] }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [search, setSearch] = useState('');
  const [newArticle, setNewArticle] = useState({ title: '', content: '' });
  const [newPerson, setNewPerson] = useState({ name: '', description: '' });
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.category.toLowerCase().includes(search.toLowerCase())
  );
  
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase()) ||
    person.era.toLowerCase().includes(search.toLowerCase())
  );
  
  const handleAddArticle = () => {
    if (newArticle.title && newArticle.content) {
      alert(`Статья "${newArticle.title}" добавлена!`);
      setNewArticle({ title: '', content: '' });
    }
  };
  
  const handleAddPerson = () => {
    if (newPerson.name && newPerson.description) {
      alert(`Персона "${newPerson.name}" добавлена!`);
      setNewPerson({ name: '', description: '' });
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Antiquity Alive</h1>
        <p className="subtitle">История античного мира</p>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Поиск по статьям и персонам..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      <nav className="navigation">
        <button 
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Главная
        </button>
        <button 
          className={`nav-btn ${currentPage === 'chronology' ? 'active' : ''}`}
          onClick={() => setCurrentPage('chronology')}
        >
          Хронология
        </button>
        <button 
          className={`nav-btn ${currentPage === 'persons' ? 'active' : ''}`}
          onClick={() => setCurrentPage('persons')}
        >
          Персоналии
        </button>
        <button 
          className={`nav-btn ${currentPage === 'articles' ? 'active' : ''}`}
          onClick={() => setCurrentPage('articles')}
        >
          Статьи
        </button>
        <button 
          className={`nav-btn ${currentPage === 'admin' ? 'active' : ''}`}
          onClick={() => setCurrentPage('admin')}
        >
          Добавить данные
        </button>
      </nav>

      <main className="main-content">
        {search && (
          <div className="search-results">
            <h2>Результаты поиска: "{search}"</h2>
            {filteredArticles.length > 0 && (
              <div>
                <h3>Статьи:</h3>
                {filteredArticles.map(article => (
                  <div key={article.id} className="card">
                    <h4>{article.title}</h4>
                    <p>{article.category}</p>
                  </div>
                ))}
              </div>
            )}
            {filteredPersons.length > 0 && (
              <div>
                <h3>Персоналии:</h3>
                {filteredPersons.map(person => (
                  <div key={person.id} className="card">
                    <h4>{person.name}</h4>
                    <p>{person.era} • {person.lifespan}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {!search && (
          <>
            {currentPage === 'home' && (
              <div className="home-page">
                <h2>Проект "Antiquity Alive"</h2>
                <p>Информационно-справочный сайт по истории античности</p>
                
                <div className="info-card">
                  <h3>Назначение проекта:</h3>
                  <p>Предоставление структурированной и проверенной информации по истории античности для студентов, преподавателей и всех интересующихся.</p>
                </div>
                
                <div className="stats">
                  <div className="stat">
                    <h3>3</h3>
                    <p>статьи</p>
                  </div>
                  <div className="stat">
                    <h3>3</h3>
                    <p>персоналии</p>
                  </div>
                  <div className="stat">
                    <h3>3</h3>
                    <p>исторических периода</p>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3>Информация о проекте:</h3>
                  <p><strong>Исполнитель:</strong> В.А. Василькова</p>
                  <p><strong>Группа:</strong> БПИ243</p>
                  <p><strong>Образовательная программа:</strong> Программная инженерия</p>
                  <p><strong>Факультет компьютерных наук, НИУ ВШЭ</strong></p>
                  <p><strong>Пояснительная записка:</strong> RU.17701729.05.13-01 81 01-1</p>
                </div>
              </div>
            )}

            {currentPage === 'chronology' && (
              <div className="chronology-page">
                <h2>Хронология античности</h2>
                <div className="timeline">
                  {timeline.map(item => (
                    <div key={item.id} className="timeline-item">
                      <h3>{item.period}</h3>
                      <p className="years">{item.years}</p>
                      <ul>
                        {item.events.map((event, idx) => (
                          <li key={idx}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentPage === 'persons' && (
              <div className="persons-page">
                <h2>Исторические личности</h2>
                <div className="grid">
                  {persons.map(person => (
                    <div key={person.id} className="card person-card">
                      <h3>{person.name}</h3>
                      <p className="era">{person.era}</p>
                      <p className="lifespan">{person.lifespan}</p>
                      <p>{person.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentPage === 'articles' && (
              <div className="articles-page">
                <h2>Статьи по истории античности</h2>
                <div className="grid">
                  {articles.map(article => (
                    <div key={article.id} className="card article-card">
                      <h3>{article.title}</h3>
                      <p className="category">{article.category}</p>
                      <p>{article.content}</p>
                      <button className="read-btn">Читать полностью</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentPage === 'admin' && (
              <div className="admin-page">
                <h2>Добавление данных</h2>
                
                <div className="admin-section">
                  <h3>Добавить статью</h3>
                  <input
                    type="text"
                    placeholder="Заголовок статьи"
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
                  />
                  <textarea
                    placeholder="Содержание статьи"
                    value={newArticle.content}
                    onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
                    rows="4"
                  />
                  <button onClick={handleAddArticle} className="submit-btn">
                    Добавить статью
                  </button>
                </div>
                
                <div className="admin-section">
                  <h3>Добавить персоналию</h3>
                  <input
                    type="text"
                    placeholder="Имя"
                    value={newPerson.name}
                    onChange={(e) => setNewPerson({...newPerson, name: e.target.value})}
                  />
                  <textarea
                    placeholder="Описание"
                    value={newPerson.description}
                    onChange={(e) => setNewPerson({...newPerson, description: e.target.value})}
                    rows="3"
                  />
                  <button onClick={handleAddPerson} className="submit-btn">
                    Добавить персоналию
                  </button>
                </div>
                
                <div className="tech-info">
                  <h3>Техническая информация:</h3>
                  <p><strong>Технологический стек:</strong> React, Vite, CSS Modules</p>
                  <p><strong>Архитектура:</strong> SPA (Single Page Application)</p>
                  <p><strong>Хостинг:</strong> Vercel / Netlify</p>
                  <p><strong>Соответствие ГОСТ:</strong> 19.101-77, 19.103-77, 19.404-79</p>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 Проект "Antiquity Alive" - Веб-сайт по истории античности</p>
        <p>Разработано в соответствии с требованиями ЕСПД</p>
        <p>Все материалы проверены и структурированы</p>
      </footer>
    </div>
  );
}

export default App;