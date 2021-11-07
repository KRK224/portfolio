import React from 'react';
import styled from 'styled-components';
import {FiMail} from 'react-icons/fi';
import { FaGithubSquare, FaPhoneAlt } from "react-icons/fa";


const ContactBlock = styled.div`
  padding: 2rem 8rem;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  word-break: keep-all;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .header {
    margin: 3rem 1rem 2rem;
    font-size: 1.8rem;
    font-weight: 600;
    .contactTitle {
      padding-left: 2rem;
      border-left: solid 0.8rem black;
    }
  }

  .contactContents {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    font-size: 1.8rem;
    div:first-child {
      text-align: center;
    }
    div + div {
      margin-top: 3rem;
      margin-left: 2rem;
      ul {
        list-style: none;
        li+li {
          margin-top: 1.5rem;
        }
        span {
          margin-left: 2rem;
        }
      }
    }
    .resume {
      text-align: center;
      button {
        font-size: 1.6rem;
        border: none;
        border-radius: 50px;
        padding: 1rem;
        background-color: #909090;
        color: white;
        &:hover {
          opacity: 0.9;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 1024px){
    padding: 2rem;
  }

  @media (max-width: 768px){
    padding: 1rem;
    .header .contactTitle {
      font-size: 1.2rem;
    }

    .contactContents {
      padding: 1rem 0.5rem;
      font-size: 0.8rem;
      div:first-child {
        word-break: keep-all;
        font-size: 1rem;
      }
      div + div {
        /* margin-left: 1rem; */
        ul {
          padding-left: 0.8rem;
          list-style: none;
          li+li {
            margin-top: 1.2rem;
          }
          span {
            margin-left: 0.8rem;
          }
        }
      }
      .resume {
        text-align: center;
        button {
          font-size: 1rem;
        }
      }
    }
  }

`;

const Contact = () =>{
  return (
    <ContactBlock>
      <div className="header">
        <span className="contactTitle">Contact</span>
      </div>
      <div className="contactContents">
        <div>궁금하신 사항은 아래로 연락 부탁드립니다.</div>
        <div className="contactList">
          <ul>
            <li className="phone">
              <FaPhoneAlt />
              <span>010-2395-2000</span>
            </li>
            <li className="email">
              <a href="mailto:hihas93@naver.com">
              <FiMail />
              <span>hihas93@naver.com</span>
              </a>
            </li>
            <li className="github">
              <a href='https://github.com/KRK224' target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
              <span>https://github.com/KRK224</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="resume">
          <a href="/img/김경륜_이력서.pdf" target="_blank" rel="noopener noreferrer">
            <button>이력서 보기</button>
          </a>
        </div>
      </div>
    </ContactBlock>
  );
}

export default Contact;
