import { useState } from 'react'

import { Routes, Route, Link } from "react-router-dom";

import Listagem from './main/Listagem'
import Menu from './main/Menu'
import Header from './main/Header'
import Clientes from './main/Clientes'


import Login from './Login'


export default function Main() {

    const [logado, setLogado] = useState(false)

    if (logado == false) {
        return <Login />
    } else {

        return (
            <div>

                <Header />

                <div className="container-fluid">
                    <div className="row">

                        <Menu />

                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                            <Routes>
                                <Route path="/" element={<Listagem />} />
                                <Route path="/clientes" element={<Clientes />} />
                            </Routes>

                        </main>
                    </div>
                </div>

            </div>
        )
    }
}