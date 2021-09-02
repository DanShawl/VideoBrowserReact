import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div
      className="ui search-bar"
      style={{ marginBottom: '1em', marginTop: '1em' }}
    >
      <form className="ui form" onSubmit={onSubmit} action="">
        <div className="field">
          {/* <label htmlFor="">Video Search</label> */}
          <input
            placeholder="Search for a video"
            type="text"
            value={term}
            // onClick={(e) => {
            //   this.setState({ term: '' });
            // }}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
// state = { term: '' };

// onFormSubmit = (e) => {
//   e.preventDefault();
//   this.props.onFormSubmit(this.state.term);
// };
// render() {
//   return (
//     <div className="ui search-bar" style={{ marginBottom: '1em' }}>
//       <form className="ui form" onSubmit={this.onFormSubmit} action="">
//         <div className="field">
//           {/* <label htmlFor="">Video Search</label> */}
//           <input
//             placeholder="Search for a video"
//             type="text"
//             value={this.state.term}
//             onClick={(e) => {
//               this.setState({ term: '' });
//             }}
//             onChange={(e) => {
//               this.setState({ term: e.target.value });
//             }}
//           />
//         </div>
//       </form>
//     </div>
//   );
//   }
// }

export default SearchBar;

//  Refactoring from class to functional components
//    -  if we see state, we'll need use state
//    -  if we see lifecycle methods, we'll need useEffect
//
//    1.  Create a functional component and refactor line by line
//    2.  When we move event handlers over, we need to change the syntax
//    3.  Watch for props and naming collisions
//    4.  Remove 'this' and 'state'
//    5.  Look for one-line functions and provide them inline to its prop
