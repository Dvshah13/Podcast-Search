import React from "react";

export default class SearchBar extends React.Component {
    getInitialState() {
       return {
         items: []
       };
     }
     addItem(e) {
         var itemArray = this.state.items;

         itemArray.push(
             {
                 text: this._inputElement.value,
                 key: Date.now()
             }
         );

         this.setState({
             items: itemArray
         });

         this._inputElement.value = "";

         e.preventDefault();
     }

     render() {
       return (
         <div className="todoListMain">
           <div className="header">
             <form onSubmit={this.addItem}>
             <input ref={(a) => this.inputElement = a}
                placeholder="enter task">
               </input>
               <button type="submit">add</button>
             </form>
           </div>
         </div>
       );
     }
   }
