import React from 'react';
import RollColumn, { Column, LabelColumn } from 'rollcolumn-react';
import logo from '../assets/logo.svg';

export default function Home() {
  return (
    <>
      <div className="content">
        <img src={logo} className="logo" alt="logo avatar" />
      </div>
      <div className="content center">
        <a
          className="App-link"
          href="https://github.com/avatarsolucoes/rollcolumn-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          RollColumn Github
        </a>
      </div>
      <div className="content">
        <RollColumn name="test">
          <Column order={1}>
            <div className="column-content col1">
              <h2>Column A</h2>
              <div className="flex">
                <div />
                <LabelColumn to={2}>To B</LabelColumn>
                <LabelColumn to={3}>To C</LabelColumn>
              </div>
            </div>
          </Column>
          <Column order={2}>
            <div className="column-content col2">
              <h2>Column B</h2>
              <div className="flex">
                <LabelColumn to={1}>To A</LabelColumn>
                <div />
                <LabelColumn to={3}>To C</LabelColumn>
              </div>
            </div>
          </Column>
          <Column order={3}>
            <div className="column-content col3">
              <h2>Column C</h2>
              <div className="flex">
                <LabelColumn to={1}>To A</LabelColumn>
                <LabelColumn to={2}>To B</LabelColumn>
                <div />
              </div>
            </div>
          </Column>
        </RollColumn>
      </div>
    </>
  );
}
