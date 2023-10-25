import styled from "styled-components";

export const component = styled.div`
    width: 170px;
    margin: 7px;
    background-color: #373b69;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 20px;
    position: relative;
`;

export const movie_img = styled.div`
    width: 150px;
    margin: 7px;
    background-color: #373b69;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-top: 20px;
    position: relative;
`;
export const img = styled.img`
    width: 100%;
`;
export const movie_info = styled.div`
    margin-left: 15px;
    margin-top:10px;
    margin-bottom:15px;
    color: #FFFFFF
`;
export const hide_info = styled.div`
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    color: #c7c7c7;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 13px;
    height: 100%;
    border-radius: 0 0 5px 5px;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    text-overflow: ellipsis;
`;