

//Constants constantes que vamos a utilizar para vincular las actions con los reducers. mayus por convencion
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_PAGE_NAME = 'SET_PAGE_NAME';
const SET_LOADING = 'SET_LOADING';
const SET_USER = 'SET_USER';

//state inicial valor inicial de las variables a las que queremos acceder globalmente.
const stateInitial = {
    pageTitle: '',
    loading: false,
    todo: [],
    user: null,
    };

//Selectores selector para poder acceder al estado desde cualquier componente.
export const appSelector = {
    todo: (state) => state.todo,
    pageTitle: (state) => state.pageTitle,
    loading: (state) => state.loading,
    user: (state) => state.user,
    };

//Actions estas funciones ejecuta el bloque de código de alguno de los reducers que coincida con el type del action.
export const appActions = {
    setPageTitle: (title) => ({
        type: SET_PAGE_NAME,
        title,
    }),
    setLoading: (payload) => ({
        type: SET_LOADING,
        payload,
    }),
    addTodo: (payload) => ({
        type: ADD_TODO,
        payload, //{id, text}
    }),
    setCompletedTodo: (payload) => ({
        type: COMPLETE_TODO,
        payload,
    }),
    deleteTodo: (id) => ({
        type: DELETE_TODO,
        id,
    }),
    setUser: (value) => ({
        type:SET_USER,
        value,
    }),
};


//Reducer
export const appReducer = (state = stateInitial, action) => {
    switch (action.type){
        case SET_PAGE_NAME:
            return {
                ...state,
                pageTitle: action.title
            };
        case SET_LOADING:
                return {
                    ...state,
                    loading: action.payload
                }
        case SET_USER:
                return {
                    ...state,
                    user: action.value
                }
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo,
                {
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
                }
                ]
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todo: state.todo.map((t) => {
                if (t.id === action.payload.id) {
                return {
                    ...t,
                    completed: action.payload.completed
                    }
                }
                return t
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(t => t.id !== action.id)
                }
        default:
            return state;
    }   
}