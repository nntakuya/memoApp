import React from 'react'
import { connect } from 'react-redux'
import { addContent, toggleContent } from '../actions'
import { Field, reduxForm ,reset} from 'redux-form'

function submit(value,dispatch){
    let sample =dispatch(addContent(value))
    console.log('submit関数',sample);
}

function submitMyform(data){
    const {createRecord, reset } = this.props;
    return createRecord(data ).then(()=>{
        reset()
    });
}

//下記の"props"は下のreduxForm関数から引き継いだ"props"である
let ContactForm = props => {
    const { handleSubmit ,reset} = props
    console.log(props);
    // console.log({handleSubmit});
    return (
        <form
            //"handleSubmit"でsubmitの制御を行っている
            //今回の場合、送信時に上記でセットしたsubmit関数を呼ぶ
            onSubmit = {
                handleSubmit(submit)
            }
         >
            <div>
                <label htmlFor="memo">Memo</label>
                <Field name="memo" component="input" type="text" />
            </div>
            <button type="submit" > Submit </button>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>dispatch(reset('contentForm'))

//下記のコードで、"ContactForm"を"redux-form"のオブジェクトへと結合している
ContactForm = reduxForm({
    form: 'contentForm',
    onSubmitSuccess: afterSubmit
})(ContactForm)

//（疑問）redux-formのようなライブラリを使用する場合には、
//"mapStateToProps"や"mapDispatchToProps"のような関数をセットしない設計にした方がよいのか
//"mapDispatchToProps"を削除した際にAppコンポーネント付近のエラーが発生する
const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddContent: (value)=>dispatch(addContent(value))
    };
}

export default connect(null,mapDispatchToProps)(ContactForm)
