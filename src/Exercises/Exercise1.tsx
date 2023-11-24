const firstName = 'Walter';
const age = 49;
const isAdult = isAbove18(age);

function isAbove18(age: number): boolean {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

const countCharacters = (word: string): number => {
    return word.split('').length;
};

const isEven = (countCharacters: number): boolean =>
    countCharacters % 2 === 0 ? true : false;

const getParityMessage = (isEven: boolean): string =>
    isEven ? 'ta liczba jest parzysta' : 'ta liczba nie jest parzysta';

const processString = (word?: string): string => {
    if (typeof word !== 'string' || word.length <= 0) {
        return 'Podaj poprawne słowo';
    }
    const wordLength = countCharacters(word);
    const isWordEven = isEven(wordLength);
    const parityMessage = getParityMessage(isWordEven);
    return `${word}, ${wordLength}, ${parityMessage}, `;
};
/* NAPISZ 4 FUNKCJE:
1. funkcję countCharacters liczącą ilość znaków w stringu
2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
3. funkcję getParityMessage która na podstawie boolean zwraca komunikat:
 - 'ta liczba jest parzysta'
 - 'ta liczba nie jest parzysta'
4. funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)
*/

const getUsersOnlineMessage = (num?: number): string => {
    if (!num || num <= 0) {
        return 'Nikt nie jest dostępny';
    }

    return `Dostępne ${num}`;
};

function Exercise1() {
    return (
        <>
            <h2>Exercise 1</h2>
            <ol>
                <li>{firstName}</li>
                <li>{String(isAdult)}</li>
                <li>{String(isAbove18(16))}</li>
                <li>{addTwoNumbers(2, 1)}</li>
            </ol>
            <div>
                count chars of word hello:{' '}
                <span>{countCharacters('hello')}</span>
            </div>
            <div>
                is even: <span>{String(isEven(countCharacters('hello')))}</span>
            </div>
            <div>
                parity message:{' '}
                <span>
                    {getParityMessage(isEven(countCharacters('hello')))}
                </span>
            </div>
            <div>
                Exe 4: <span>{processString('')}</span>
            </div>
            <div>
                <h2>Zadanie 2</h2>
                <li>{getUsersOnlineMessage(5)}</li>
                <li>{getUsersOnlineMessage(60)}</li>
                <li>{getUsersOnlineMessage()}</li>
                <li>{getUsersOnlineMessage(-3)}</li>
            </div>
        </>
    );
}

export default Exercise1;
