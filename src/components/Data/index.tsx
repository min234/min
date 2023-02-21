import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

interface Props {
  data: any;
}

function Index({ data = [] }: Props) {
  return (
    <S.Container>
      <div className="container">
        <div className="conent">
          {data.map((v: any, i: any) => (
            <div className="item-box" key={i}>
              <Link to="./purchase">
                <button className="src">{v.src}</button>
              </Link>
              <div className="title1">{v.name}</div>
              <div className="g">
                <div className="target">{v.target}</div>
                <div className="hun">{v.hun}</div>
              </div>
              <div className="w">
                <div className="amount">{v.target}</div>
                <div className="ten">{v.ten} </div>
              </div>
            </div>
          ))}
        </div>
        <div className="conent">
          {data.map((v: any, i: any) => (
            <div className="item-box" key={i}>
              <div className="src">{v.src}</div>
              <div className="title1">{v.name}</div>
              <div className="g">
                <div className="target">{v.target}</div>
                <div className="hun">{v.hun}</div>
              </div>
              <div className="w">
                <div className="amount">{v.target}</div>
                <div className="ten">{v.ten} </div>
              </div>
            </div>
          ))}
        </div>
        <div className="conent">
          {data.map((v: any, i: any) => (
            <div className="item-box" key={i}>
              <div className="src">{v.src}</div>
              <div className="title1">{v.name}</div>
              <div className="g">
                <div className="target">{v.target}</div>
                <div className="hun">{v.hun}</div>
              </div>
              <div className="w">
                <div className="amount">{v.target}</div>
                <div className="ten">{v.ten} </div>
              </div>
            </div>
          ))}
        </div>
        <div className="conent">
          {data.map((v: any, i: any) => (
            <div className="item-box" key={i}>
              <div className="src">{v.src}</div>
              <div className="title1">{v.name}</div>
              <div className="g">
                <div className="target">{v.target}</div>
                <div className="hun">{v.hun}</div>
              </div>
              <div className="w">
                <div className="amount">{v.target}</div>
                <div className="ten">{v.ten} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </S.Container>
  );
}

export default Index;
