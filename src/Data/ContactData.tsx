export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string;
  preference?: string;
}
const today = new Date();
export const contactData: Array<FormValues> = [
  {id: 1, name: 'Maksym Lyskov', role: 'Dev', skills:["React", "Node","React Native"], startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`, preference: "Work From Home"},
  {id: 2, name: 'Brad Pitt', role: 'Dev', skills:["React"], startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`, preference: "Work From Home"},
  {id: 3, name: "John Lennon", role: 'Dev', skills:["React"], startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`, preference: "Work From Home"},
  {id: 4, name: 'Walter White', role: 'Dev', skills:["React"], startDate: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`, preference: "Work From Home"}
];