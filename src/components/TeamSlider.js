// import styled from "styled-components";
// import { teamData } from "./TeamData";
//
// function TeamSlider({ slideIndex, setSlideIndex }) {
//     const previousSlide = () => {
//         if (slideIndex !== 1) {
//             setSlideIndex((prev) => prev - 1);
//         } else {
//             setSlideIndex(teamData.length);
//         }
//     };
//
//     const nextSlide = () => {
//         if (slideIndex !== teamData.length) {
//             setSlideIndex((prev) => prev + 1);
//         } else {
//             setSlideIndex(1);
//         }
//     };
//
//     const moveDot = (index) => {
//         setSlideIndex(index);
//     };
//
//     return (
//         <Container>
//             <Arrow direction="prev" onClick={previousSlide}>이전</Arrow>
//             {teamData.map((team) => (
//                 <Slide
//                     key={team.id}
//                     className={team.id === slideIndex ? "active" : null}
//                 >
//                     <Name>{team.name}</Name>
//                     <Photo src={process.env.PUBLIC_URL + `/teamIcon/${team.image}`} />
//                 </Slide>
//             ))}
//             <Arrow direction="next" onClick={nextSlide}>다음</Arrow>
//             <DotContainer>
//                 {teamData.map((team) => (
//                     <Dot
//                         key={team.id}
//                         className={team.id === slideIndex ? "active" : null}
//                         onClick={() => moveDot(team.id)}
//                     />
//                 ))}
//             </DotContainer>
//         </Container>
//     );
// }
//
// export default TeamSlider;
//
// // 스타일 컴포넌트 정의
// const Container = styled.div`
//     width: 1000px;
//     height: 300px;
//     margin: 200px auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
// `;
//
// const Arrow = styled.div`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     margin: auto 0;
//     text-align: center;
//     left: ${({ direction }) => direction === "prev" && "0px"};
//     right: ${({ direction }) => direction === "next" && "0px"};
//     width: 80px;
//     height: 80px;
//     border-radius: 50%;
//     background-color: pink;
//     z-index: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
//
// const Slide = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     row-gap: 20px;
//     opacity: 0;
//     transition: opacity 0.3s ease-in-out;
//     &.active {
//         opacity: 1;
//     }
// `;
//
// const Photo = styled.img``;
//
// const Name = styled.div``;
//
// const DotContainer = styled.div`
//     position: absolute;
//     bottom: 0;
//     width: 150px;
//     margin: -30px;
//     display: flex;
//     justify-content: space-between;
// `;
//
// const Dot = styled.div`
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     background-color: pink;
//     cursor: pointer;
//     &.active {
//         background-color: skyblue;
//     }
// `;

import styled from "styled-components";

function TeamSlider({ slideIndex, setSlideIndex, teamData }) {
    const previousSlide = () => {
        setSlideIndex((prev) => (prev === 1 ? teamData.length : prev - 1));
    };

    const nextSlide = () => {
        setSlideIndex((prev) => (prev === teamData.length ? 1 : prev + 1));
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <Container>
            <Arrow direction="prev" onClick={previousSlide}>‹</Arrow>
            {teamData.map((team) => (
                <Slide
                    key={team.id}
                    className={team.id === slideIndex ? "active" : null}
                >
                    <Name>{team.name}</Name>
                    <Photo src={process.env.PUBLIC_URL + `/teamIcon/${team.image}`} alt={`${team.name} 로고`} />
                </Slide>
            ))}
            <Arrow direction="next" onClick={nextSlide}>›</Arrow>
            <DotContainer>
                {teamData.map((team) => (
                    <Dot
                        key={team.id}
                        className={team.id === slideIndex ? "active" : null}
                        onClick={() => moveDot(team.id)}
                    />
                ))}
            </DotContainer>
        </Container>
    );
}

export default TeamSlider;

// 스타일 컴포넌트 정의
const Container = styled.div`
    width: 1000px;
    height: 300px;
    margin: 200px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Arrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    text-align: center;
    left: ${({ direction }) => direction === "prev" && "0px"};
    right: ${({ direction }) => direction === "next" && "0px"};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: pink;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Slide = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    &.active {
        opacity: 1;
    }
`;

const Photo = styled.img``;

const Name = styled.div``;

const DotContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 150px;
    margin: -30px;
    display: flex;
    justify-content: space-between;
`;

const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: pink;
    cursor: pointer;
    &.active {
        background-color: skyblue;
    }
`;
