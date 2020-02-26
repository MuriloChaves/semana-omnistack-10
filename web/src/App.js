import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords

                setLatitude(latitude)
                setLongitude(longitude)
            },
            (err) => {
                console.log(err)
            },
            {
                timeout: 30000
            }
        )
    }, [])

    // buscar devs na api
    useEffect(() => {
        
    })

    async function handleAddDev(e) {
        e.preventDefault()

        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude
        })

        setGithubUsername('')
        setTechs('')
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form onSubmit={handleAddDev}>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input
                            name="github_username"
                            id="github_username"
                            required
                            value={github_username}
                            onChange={e => setGithubUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input
                            name="techs"
                            id="techs"
                            required
                            value={techs}
                            onChange={e => setTechs(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input
                                type="number"
                                name="latitude"
                                id="latitude"
                                required
                                value={latitude}
                                onChange={e => setLatitude(e.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                type="number"
                                name="longitude"
                                id="longitude"
                                required
                                value={longitude}
                                onChange={e => setLongitude(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit">Salvar</button>

                </form>
            </aside>

            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/12214062?s=400&u=5f135f1605814d7f6a6da9e952e4c7788a327fb9&v=4" alt="Murilo Chaves Jayme" />
                            <div className="user-info">
                                <strong>Murilo Chaves Jayme</strong>
                                <span>Python, ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Data Scientist, Pythonist, communities and Artificial intelligence: [Neural Networks], [Genetic Algorithms].</p>
                        <a href="https://github.com/murilochaves">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/12214062?s=400&u=5f135f1605814d7f6a6da9e952e4c7788a327fb9&v=4" alt="Murilo Chaves Jayme" />
                            <div className="user-info">
                                <strong>Murilo Chaves Jayme</strong>
                                <span>Python, ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Data Scientist, Pythonist, communities and Artificial intelligence: [Neural Networks], [Genetic Algorithms].</p>
                        <a href="https://github.com/murilochaves">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/12214062?s=400&u=5f135f1605814d7f6a6da9e952e4c7788a327fb9&v=4" alt="Murilo Chaves Jayme" />
                            <div className="user-info">
                                <strong>Murilo Chaves Jayme</strong>
                                <span>Python, ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Data Scientist, Pythonist, communities and Artificial intelligence: [Neural Networks], [Genetic Algorithms].</p>
                        <a href="https://github.com/murilochaves">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/12214062?s=400&u=5f135f1605814d7f6a6da9e952e4c7788a327fb9&v=4" alt="Murilo Chaves Jayme" />
                            <div className="user-info">
                                <strong>Murilo Chaves Jayme</strong>
                                <span>Python, ReactJS, React Native, Node.js</span>
                            </div>
                        </header>
                        <p>Data Scientist, Pythonist, communities and Artificial intelligence: [Neural Networks], [Genetic Algorithms].</p>
                        <a href="https://github.com/murilochaves">Acessar perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default App;
