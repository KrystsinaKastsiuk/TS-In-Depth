import * as Inrerfaces from './../interfaces';
import { sealed, logger, writable, logMethod, logParameter, format } from '../decorators';


@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Inrerfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;


    @logMethod
    assistCustomet(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFinally(): void {
        console.log(`Assisting finally`);
    }

    @writable(false)
    testCommunity(): void {
        console.log(`Teaching community`);
    }
}
