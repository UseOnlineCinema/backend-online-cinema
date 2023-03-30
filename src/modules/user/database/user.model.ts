import {
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: boolean;

  @Column(DataType.ENUM)
  role: UserRole[];
}
