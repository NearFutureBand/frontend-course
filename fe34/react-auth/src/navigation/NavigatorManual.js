/**
 * 1) Этот компонент не используется в проекте, а существует только как пример
 * Здесь создается навигатор вручную.
 */

import AuthWithAxios from './AuthWithAxios';
import Users from './Users';
import React, { Component } from 'react';

/**
 * 3) Главная управляющая структура. Это массив объектов, каждый объект описывает
 * один роут (страницу). Далее в компоненте эта структура применяется 
 */
const routes = {
  auth: {
    routeName: 'auth',
    component: <AuthWithAxios />,
    name: 'Authentication'
  },
  users: {
    routeName: 'users',
    component: <Users />,
    name: 'Users'
  }
};

/**
 * 2) Идея навигатора проста. Каждая страница - это компонент. Большой компонент,
 * занимающий всю страницу. В навигаторе нужно завести некоторый стейт и
 * в зависимости от того какой сейчас стейт, нужно показывать определенный
 * компонент-страницу
 */
class Navigator extends Component {

  /**
   * 4) В стейте будет храниться идентификатор роута, то есть некая id-строка,
   * которая показывает, какую страницу сейчас показывать
   */
  state = {
    currentPage: 'auth'
  }

  /**
   * 5) В элементе nav несколько кнопок-ссылок. Нажимая на них переходим на
   * другую страницу. Значит устанавливаем стейт по клику. И когда стейт поменяется,
   * отобразится другой компонент-страница
   */
  render () {
    return (
      <div>
        <nav>
          {Object.values(routes).map((item) => {
            return (
              <button
              onClick={() => this.setState({ currentPage: item.routeName})}
            >{item.name}</button>
            )
          })}
        </nav>
        {routes[this.state.currentPage].component}
      </div>
    );
  }
}

export default Navigator;
