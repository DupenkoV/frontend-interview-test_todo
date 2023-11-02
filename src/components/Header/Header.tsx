/* VENDOR */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import text from 'assets/text/modal.json';

/* APPLICATION */
import './Header.css';
import { ModalCreateItem } from '../Modal/ModalCreateItem';

export const Header = () => {
  const { pathname } = useLocation(),
    isCategories = pathname.includes('categories'),
    [createModalActive, setCreateModalActive] = useState(false);

  const categoryNames = isCategories
    ? text.header.title.categoryAdd
    : text.header.title.taskAdd;

  return (
    <header className={text.classes.header}>
      <h1 className={text.classes.headerTitle}>ToDo List</h1>
      <nav className={text.classes.headerNav}>
        <ul className={text.classes.headerList}>
          <li
            className={
              !isCategories
                ? 'header-list-item header-list-item-active'
                : 'header-list-item'
            }>
            <Link to="tasks">Задачи</Link>
          </li>
          <li
            className={
              isCategories
                ? 'header-list-item header-list-item-active'
                : 'header-list-item'
            }>
            <Link to="categories">Категории</Link>
          </li>
        </ul>
        <button
          className="header-button"
          onClick={() => {
            setCreateModalActive(true);
          }}>
          {categoryNames}
        </button>
      </nav>
      <ModalCreateItem
        active={createModalActive}
        setActive={setCreateModalActive}
      />
    </header>
  );
};
