// initial State
export const initialState = {
  employee: [],
  filteredCandidate: [],
};

// actions
const LOAD_EMPLOYEE = '[Employee] Loaded Employee';
const ADD_EMPLOYEE = '[Employee] Add Employee';
const REMOVE_EMPLOYEE = '[Employee] Remove Employee';
const FILTER_EMPLOYEE = '[Employee] Filter Employee';

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

export const removeEmployee = (payload) => ({
  type: REMOVE_EMPLOYEE,
  payload,
});

/* {
 * type: '[Employee] Filter Employee'
 * payload: '' -> строка поиска, по которой будет идти фильтрация
}*/
export const filterEmployee = (payload) => ({
  type: FILTER_EMPLOYEE,
  payload,
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
    default:
      return state;
  }
};
