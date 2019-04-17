class Gate {
    private state: GateState;

    constructor() {
        this.state = new ClosedGateState();
    }

    public enter(): void {
        console.log('Entering...');
        this.state.handleEnter(this);
    }

    public pay(): void {
        console.log('Payment initiated...');
        this.state.handlePay(this);
    }

    public payOk(): void {
        console.log('Payment success...');
        this.state.handlePayOk(this);
    }

    public payFailed(): void {
        console.log('Payment failed...');
        this.state.handlePayFailed(this);
    }

    public changeState(gateState: GateState) {
        this.state = gateState;
        this.state.describe();
    }
}

interface GateState {
    handleEnter(gate: Gate): void;
    handlePay(gate: Gate): void;
    handlePayOk(gate: Gate): void;
    handlePayFailed(gate: Gate): void;
    describe(): void;
}

class OpenGateState implements GateState {
    public handleEnter(gate: Gate): void {
        gate.changeState(new ClosedGateState());
    }

    public handlePay(gate: Gate): void {
        gate.changeState(new OpenGateState());
    }

    public handlePayOk(gate: Gate): void {
        gate.changeState(new OpenGateState());
    }

    public handlePayFailed(gate: Gate): void {
        gate.changeState(new OpenGateState());
    }

    public describe(): void {
        console.log('...OPEN...');
    }
}

class ClosedGateState implements GateState {
    public handleEnter(gate: Gate): void {
        gate.changeState(new ClosedGateState());
    }

    public handlePay(gate: Gate): void {
        gate.changeState(new ProcessingGateState());
    }

    public handlePayOk(gate: Gate): void {
        gate.changeState(new OpenGateState());
    }

    public handlePayFailed(gate: Gate): void {
        gate.changeState(new ClosedGateState());
    }

    public describe(): void {
        console.log('...CLOSED...');
    }
}

class ProcessingGateState implements GateState {
    public handleEnter(gate: Gate): void {
        gate.changeState(new ProcessingGateState());
    }

    public handlePay(gate: Gate): void {
        gate.changeState(new ProcessingGateState());
    }

    public handlePayOk(gate: Gate): void {
        gate.changeState(new OpenGateState());
    }

    public handlePayFailed(gate: Gate): void {
        gate.changeState(new ClosedGateState());
    }

    public describe(): void {
        console.log('...PROCESSING...');
    }
}

const gate = new Gate();
gate.enter();
gate.pay();
gate.payFailed();
gate.pay();
gate.payOk();
gate.enter();
gate.payFailed();