import { Component } from 'react';

// class Square extends Component {
//   render() {
//     return (
//       <button
//         onClick={() => this.props.onClick()}
//         className='bg-white border border-solid border-[#999] text-[24px] size-[40px] mr-[-1px] mt-[-5px] p-0 flex justify-center items-center'
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

const Square = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className='w-full aspect-square bg-white border border-solid border-[#999] text-[70px] text-black mr-[-1px] mt-[-1px] flex justify-center items-center'
    >
      {props.value}
    </button>
  );
};

export default Square;
