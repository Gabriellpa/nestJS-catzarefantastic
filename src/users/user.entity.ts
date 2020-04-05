import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  // constructor(firstName: string, lastName: string,password: string,isActive: boolean){
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.password = password;
  //     this.isActive = isActive;
  //   }
  @ObjectIdColumn()
  _id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  
  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}