import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
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
  password: string;

  @Column({ type: DataType.ENUM, values: Object.values(UserRole) })
  role: UserRole[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt?: Date;
}
