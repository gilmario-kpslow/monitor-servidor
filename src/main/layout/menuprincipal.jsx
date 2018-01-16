import React from 'react'
import Menu from '../../componentes/layout/menu'
import Menuitem from '../../componentes/layout/menuitem'
import MenuDrop from '../../componentes/layout/menucolapse'

export default props => (
    <Menu>
        <Menuitem para="/" label="Dashboard" />
        <MenuDrop label="Dados Basicos" id="menu-dados">
            <MenuDrop label="Cadastrar" id="menu-cadastrar">
                <Menuitem para="/so/cadastro" label="SO" />
                <Menuitem para="/processador/cadastro" label="Processadores" />
                <Menuitem para="/servidor/cadastro" label="Servidor"/>
            </MenuDrop>
        </MenuDrop>
    </Menu>
)