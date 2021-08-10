import React, {Component} from 'react';
import './itemDetails.css';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();        
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        getData(itemId)
            .then(this.onItemDetailsLoaded)
            .catch( () => this.onError() )            
    }

    onError = () => {
        this.setState({
            item: null,
            error: true
        })
    }

    showItem(item) {
    const {name} = item;
        return (
            <>            
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>            
            </>
        )
    }

    render() {

        const {item, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? 
            <div className="item-details rounded">
                <Spinner/>
            </div> : null;
        const content = !(loading || error) ? this.showItem(item): null;        
        
        if (!item) {
            return(
                <div className="item-details rounded">
                    <span className='select-error'>Please select an item</span>
                </div>
            );
        } else {
            return(
                <div className="item-details rounded">
                    {errorMessage}                
                    {spinner}
                    {content}
                </div>
            );
        }
    }
}
