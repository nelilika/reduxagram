// initial State
export const initialState = {
  employee: [],
  filteredCandidate: [],
  isOpenModal: false,
};

// actions
const LOAD_EMPLOYEE = '[Employee] Loaded Employee';
const ADD_EMPLOYEE = '[Employee] Add Employee';
const REMOVE_EMPLOYEE = '[Employee] Remove Employee';
const FILTER_EMPLOYEE = '[Employee] Filter Employee';
const TOGGLE_MODAL = '[Empoyee] Toggle Modal Window';

// action function
/* {
 * type: '[Employee] Loaded Employee'
 * payload: [{}, {}, {}] -> массив сотрудников, который пришел с сервера
}*/
export const loadedEmployee = (payload) => ({
  type: LOAD_EMPLOYEE,
  payload,
});

/* {
 * type: '[Employee] Add Employee'
 * payload: {} -> объек сотрудника, который нужно добавитьь
}*/
export const addEmployee = (payload) => ({
  type: ADD_EMPLOYEE,
  payload,
});

/* {
 * type: '[Employee] Remove Employee'
 * payload: '' -> guid сотрудника в виде строки, который нужно удалить
}*/

export const removeEmployee = () => ({
  type: REMOVE_EMPLOYEE,
});

/* {
 * type: '[Empoyee] Toggle Modal Window'
}*/
export const filterEmployee = (payload) => ({
  type: FILTER_EMPLOYEE,
  payload,
});

/* {
 * type: '[Employee] Filter Employee'
 * payload: '' -> строка поиска, по которой будет идти фильтрация
}*/
export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

// reducer
export const employeeReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_EMPLOYEE:
      return {
        ...state,
        employee: [...action.payload],
        filteredCandidate: [...action.payload],
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employee: [action.payload, ...state.employee],
        filteredCandidate: [action.payload, ...state.employee],
      };
    case REMOVE_EMPLOYEE:
      return {
        ...state,
        employee: state.employee.filter(
          (employee) => employee.guid !== action.payload
        ),
        filteredCandidate: state.employee.filter(
          (employee) => employee.guid !== action.payload
        ),
      };
    case FILTER_EMPLOYEE:
      return {
        ...state,
        filteredCandidate: action.payload
          ? state.employee.filter((candidate) =>
              candidate.name.includes(action.payload)
            )
          : state.employee,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };
    default:
      return state;
  }
};
