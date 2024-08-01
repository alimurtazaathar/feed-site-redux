Creating this Posts page

Firstly a folder "app" was made with store.js file
    Store.js
        The file uses configureStore function and slice imports 
        configurestore({reducer:{state_name:reducers_name}})

Folder features created
postSlice.js created
    postSlice.js 
        This file uses createSlice function
        createSlice({
            name:state_name
            initialState,
            reducers:{
                all reducers here
            }
        })

PostLists component made
    PostLists
        uses useSelector hook from react-redux
        calls useSelector to fetch the entire store and uses store.post state

AddPost component created
    AddPost
        uses useDispatch hook 
        when save button clicked calls dispatch(reducer_name(the item to add))

App Component
    uses the addPost and postlists components

index.js
    imports store and provider
    sets prop of provider as store
    