//import { useRef, useState } from 'react'

// const reduxManager = {
// 	store: null,
// 	renderTriggers: new Map(),//это специальный конструктор Map, аналог объекта {}, но в котором ключ  является особенным и по этому Map можно проходить циклом как по массиву с указанеим каждого ключа и его значение
// 	render: () => {
// 		// reduxManager.renderTriggers.forEach((renderTrigger) => renderTrigger(Math.random())) //запуск нового рендера через рондомное число
// 		//через символ всегда возваращается ссылочный тип, который  накогда не повторяется
// 		reduxManager.renderTriggers.forEach((renderTrigger) => renderTrigger(Symbol()))
// 		//запуск рендеринга поотдельноости
// 	},
// }


// кастомные хуки:
// dispatch --> reduxNanager.render --> setRenderIndicator

// export const useReduxState = () => {
// 	//фиктивный state, для запуска рендера внутри компонентов через проверку изменения данных:
// 	const [renderIndicator, setRenderIndicator] = useState(Symbol())
// //первый вариант для добавления нового состояния через рендеринг:
// 	//reduxManager.renderTriggers.push(setRenderIndicator)- это неверный способ, который безгранично может умножать количество обновлений (число всех рендерингов компонентов)
//
// //получаем отдельный ключ для каждого компонента,который не будет меняться при каждом рендреинге и испльзуем хук useRef,который и обеспечивает статичность значения этого ключа:
// 	const renderTriggerKey = useRef(renderIndicator).current
//
// //для одного и того же ключа перезаписываем его значение(.set(key, value)):
// 	reduxManager.renderTriggers.set(renderTriggerKey, setRenderIndicator)
//
// 	// получаем и возвращаем новое состояние:
// 	return reduxManager.store.getState()
// }

//хук- функция, которая возвращает функцию dispatch//store.dispatch:

// export const useDispatch = () => (action) => {
// 	//отправляем action
// 	reduxManager.store.dispatch(action)
// 	//дополнительно запускаем рендер(обновление)
// 	reduxManager.render()
// }

// 
// export const ReduxRenderer = ({ children, store}) => {
// 	reduxManager.store = store
//
// 	return children
// }



//что такое Библиотека в JS? - это набор разных функций
//объект позволяет задавать значения для ключей и сторками и символами, но в случае с символами, эти значения становятся неперечисляемыми (по ним невозможно пройтись циклом!)
//то есть при переводе объекта{}, в которм есть ключи в виде Symbol в массив [] через Object.values() внего передадутся пустые значения для ключей в виде Symbol !!! и  по такому массиву уже будет невозможно пройтись перебором в виде цикла
