const taskProgram = {
    taskArray: [],
    taskCount: 0,
    add(obj) {
        const newTodo = Object.create({});
        this.checkTag(obj);
        [newTodo.id, newTodo.name, newTodo.tag, newTodo.state] = [taskProgram.taskCount, obj.name.toLowerCase(), obj.tag.toLowerCase(), 'todo'];
        this.increaseTaskCount();
        this.taskArray.push(newTodo);
        return [console.log(`id : ${newTodo.id}, "${obj.name}" 항목이 추가 되었습니다.`), taskProgram.showState()];
    },
    checkTag(obj) {
        if (obj.tag === undefined) obj.tag = '';
    },
    increaseTaskCount() {
        this.taskCount++;
    },
    showState() {
        const filteredArray = this.filteringStates(this.taskArray);
        let todo, doing, done;
        [todo, doing, done] = [filteredArray[0].length, filteredArray[1].length, filteredArray[2].length];
        return console.log(`현재상태 :  todo : ${todo}, doing : ${doing}, done : ${done} `);
    },
    filteringStates(array) {
        const stateTodo = array.filter(v => v.state === 'todo');
        const stateDoing = array.filter(v => v.state === 'doing');
        const stateDone = array.filter(v => v.state === 'done');
        return [stateTodo, stateDoing, stateDone];
    },
    update(obj) {
        let updatedStatus, id, updatedName, pastState;
        [updatedStatus, id] = [obj.nextstatus.toLowerCase(), obj.id];
        this.taskArray.forEach(v => {
            if (v.id === id) {
                [updatedName, pastState, v.state] = [v.name, v.state, updatedStatus];
            }
        });
        console.log(`id : ${id}, "${updatedName}" 항목이 ${pastState} => ${updatedStatus} 상태로 업데이트 됐습니다 `);
        return this.showState();
    },
    remove(obj) {
        const removedtodo = this.taskArray.splice(this.taskArray[obj.id].id, 1);
        return console.log(`id : ${removedtodo[0].id}, "${removedtodo[0].name}" 삭제완료.`);
    },
    showTag(string) {
        if (this.classifyArgument(string)) {
            const classifiedArray = this.classifyArgument(string);
            const filteredArray = this.filteringStates(classifiedArray);
            let todo, doning, done;
            [todo, doning, done] = [filteredArray[0], filteredArray[1], filteredArray[2]];
            this.loopConsoleLog(todo);
            this.loopConsoleLog(doning);
            this.loopConsoleLog(done);
        }
    },
    classifyArgument(paramaeter) {
        const filteredArray = this.taskArray.filter(v => v.tag === paramaeter.toLowerCase());
        if (filteredArray.length === 0) return false;
        if (filteredArray.length !== 0) return filteredArray;
    },
    loopConsoleLog(array) {
        if (array.length === 0) return;
        array.name = array[0].state;
        console.log(`[ ${array.name}, 총 ${array.length}개 ]`);
        array.forEach(v => {
            console.log(` - ${v.id}번, ${v.name}`);
        });
    }
};
taskProgram.add({ name: '친구만나기' });
taskProgram.add({ name: '숨쉬기', tag: 'working' });
taskProgram.add({ name: '밥먹기', tag: 'Working' });
taskProgram.add({ name: '손씻기', tag: 'worKing' });
taskProgram.update({ id: 1, nextstatus: 'Doing' });
taskProgram.update({ id: 2, nextstatus: 'donE' });
// taskProgram.remove({ id: 0 });
taskProgram.showTag('workinG');

