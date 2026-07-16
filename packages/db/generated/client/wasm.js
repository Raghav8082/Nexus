
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  plan: 'plan',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  role: 'role',
  isActive: 'isActive',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  type: 'type',
  currency: 'currency',
  balance: 'balance',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JournalEntryScalarFieldEnum = {
  id: 'id',
  reference: 'reference',
  description: 'description',
  date: 'date',
  tenantId: 'tenantId',
  isLocked: 'isLocked',
  createdAt: 'createdAt'
};

exports.Prisma.JournalLineScalarFieldEnum = {
  id: 'id',
  journalEntryId: 'journalEntryId',
  accountId: 'accountId',
  debit: 'debit',
  credit: 'credit',
  description: 'description'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  id: 'id',
  number: 'number',
  type: 'type',
  status: 'status',
  vendorName: 'vendorName',
  clientName: 'clientName',
  amount: 'amount',
  currency: 'currency',
  dueDate: 'dueDate',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  employeeCode: 'employeeCode',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phone: 'phone',
  department: 'department',
  designation: 'designation',
  salary: 'salary',
  joinedAt: 'joinedAt',
  isActive: 'isActive',
  managerId: 'managerId',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LeaveRequestScalarFieldEnum = {
  id: 'id',
  employeeId: 'employeeId',
  leaveType: 'leaveType',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  reason: 'reason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PayrollRunScalarFieldEnum = {
  id: 'id',
  employeeId: 'employeeId',
  period: 'period',
  grossPay: 'grossPay',
  deductions: 'deductions',
  netPay: 'netPay',
  status: 'status',
  processedAt: 'processedAt',
  createdAt: 'createdAt'
};

exports.Prisma.InventoryItemScalarFieldEnum = {
  id: 'id',
  sku: 'sku',
  name: 'name',
  quantity: 'quantity',
  reorderPoint: 'reorderPoint',
  unitCost: 'unitCost',
  warehouseLocation: 'warehouseLocation',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PurchaseOrderScalarFieldEnum = {
  id: 'id',
  poNumber: 'poNumber',
  vendorName: 'vendorName',
  vendorEmail: 'vendorEmail',
  status: 'status',
  totalAmount: 'totalAmount',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  status: 'status',
  budget: 'budget',
  spent: 'spent',
  startDate: 'startDate',
  endDate: 'endDate',
  tenantId: 'tenantId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MilestoneScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  title: 'title',
  dueDate: 'dueDate',
  isCompleted: 'isCompleted',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  body: 'body',
  type: 'type',
  isRead: 'isRead',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  tenantId: 'tenantId',
  action: 'action',
  resource: 'resource',
  resourceId: 'resourceId',
  metadata: 'metadata',
  ipAddress: 'ipAddress',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  TENANT_ADMIN: 'TENANT_ADMIN',
  MANAGER: 'MANAGER',
  VIEWER: 'VIEWER'
};

exports.Prisma.ModelName = {
  Tenant: 'Tenant',
  User: 'User',
  Account: 'Account',
  JournalEntry: 'JournalEntry',
  JournalLine: 'JournalLine',
  Invoice: 'Invoice',
  Employee: 'Employee',
  LeaveRequest: 'LeaveRequest',
  PayrollRun: 'PayrollRun',
  InventoryItem: 'InventoryItem',
  PurchaseOrder: 'PurchaseOrder',
  Project: 'Project',
  Milestone: 'Milestone',
  Notification: 'Notification',
  AuditLog: 'AuditLog'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Raghav Verma\\Desktop\\Nexus\\packages\\db\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\Raghav Verma\\Desktop\\Nexus\\packages\\db\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/client\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// ─── MULTI-TENANCY ───────────────────────────────────────────────\nmodel Tenant {\n  id        String   @id @default(cuid())\n  name      String\n  slug      String   @unique\n  plan      String   @default(\"FREE\") // FREE | PRO | ENTERPRISE\n  isActive  Boolean  @default(true)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  users          User[]\n  accounts       Account[]\n  employees      Employee[]\n  purchaseOrders PurchaseOrder[]\n  inventoryItems InventoryItem[]\n  projects       Project[]\n  auditLogs      AuditLog[]\n}\n\n// ─── USERS & ROLES ───────────────────────────────────────────────\nenum Role {\n  SUPER_ADMIN\n  TENANT_ADMIN\n  MANAGER\n  VIEWER\n}\n\nmodel User {\n  id        String   @id @default(cuid())\n  email     String   @unique\n  password  String\n  firstName String\n  lastName  String\n  role      Role     @default(VIEWER)\n  isActive  Boolean  @default(true)\n  tenantId  String\n  tenant    Tenant   @relation(fields: [tenantId], references: [id])\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  notifications Notification[]\n  auditLogs     AuditLog[]\n\n  @@index([tenantId])\n  @@index([email])\n}\n\n// ─── FINANCE ─────────────────────────────────────────────────────\nmodel Account {\n  id        String   @id @default(cuid())\n  code      String\n  name      String\n  type      String // ASSET | LIABILITY | EQUITY | REVENUE | EXPENSE\n  currency  String   @default(\"INR\")\n  balance   Decimal  @default(0) @db.Decimal(18, 2)\n  tenantId  String\n  tenant    Tenant   @relation(fields: [tenantId], references: [id])\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  journalLines JournalLine[]\n\n  @@unique([tenantId, code])\n  @@index([tenantId])\n}\n\nmodel JournalEntry {\n  id          String   @id @default(cuid())\n  reference   String\n  description String?\n  date        DateTime\n  tenantId    String\n  isLocked    Boolean  @default(false)\n  createdAt   DateTime @default(now())\n\n  lines JournalLine[]\n\n  @@index([tenantId])\n}\n\nmodel JournalLine {\n  id             String       @id @default(cuid())\n  journalEntryId String\n  journalEntry   JournalEntry @relation(fields: [journalEntryId], references: [id])\n  accountId      String\n  account        Account      @relation(fields: [accountId], references: [id])\n  debit          Decimal      @default(0) @db.Decimal(18, 2)\n  credit         Decimal      @default(0) @db.Decimal(18, 2)\n  description    String?\n}\n\nmodel Invoice {\n  id         String   @id @default(cuid())\n  number     String\n  type       String // AP | AR\n  status     String   @default(\"DRAFT\") // DRAFT | PENDING | APPROVED | PAID | OVERDUE\n  vendorName String?\n  clientName String?\n  amount     Decimal  @db.Decimal(18, 2)\n  currency   String   @default(\"INR\")\n  dueDate    DateTime\n  tenantId   String\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([tenantId])\n}\n\n// ─── HR ──────────────────────────────────────────────────────────\nmodel Employee {\n  id           String     @id @default(cuid())\n  employeeCode String\n  firstName    String\n  lastName     String\n  email        String\n  phone        String?\n  department   String\n  designation  String\n  salary       Decimal    @db.Decimal(18, 2)\n  joinedAt     DateTime\n  isActive     Boolean    @default(true)\n  managerId    String?\n  manager      Employee?  @relation(\"EmployeeHierarchy\", fields: [managerId], references: [id])\n  reports      Employee[] @relation(\"EmployeeHierarchy\")\n  tenantId     String\n  tenant       Tenant     @relation(fields: [tenantId], references: [id])\n  createdAt    DateTime   @default(now())\n  updatedAt    DateTime   @updatedAt\n\n  leaveRequests LeaveRequest[]\n  payrollRuns   PayrollRun[]\n\n  @@unique([tenantId, employeeCode])\n  @@index([tenantId])\n}\n\nmodel LeaveRequest {\n  id         String   @id @default(cuid())\n  employeeId String\n  employee   Employee @relation(fields: [employeeId], references: [id])\n  leaveType  String // ANNUAL | SICK | UNPAID | MATERNITY | PATERNITY\n  startDate  DateTime\n  endDate    DateTime\n  status     String   @default(\"PENDING\") // PENDING | APPROVED | REJECTED\n  reason     String?\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n}\n\nmodel PayrollRun {\n  id          String    @id @default(cuid())\n  employeeId  String\n  employee    Employee  @relation(fields: [employeeId], references: [id])\n  period      String // e.g. \"2026-04\"\n  grossPay    Decimal   @db.Decimal(18, 2)\n  deductions  Decimal   @db.Decimal(18, 2)\n  netPay      Decimal   @db.Decimal(18, 2)\n  status      String    @default(\"PENDING\") // PENDING | PROCESSED | PAID\n  processedAt DateTime?\n  createdAt   DateTime  @default(now())\n\n  @@index([employeeId])\n}\n\n// ─── SUPPLY CHAIN ────────────────────────────────────────────────\nmodel InventoryItem {\n  id                String   @id @default(cuid())\n  sku               String\n  name              String\n  quantity          Int      @default(0)\n  reorderPoint      Int      @default(10)\n  unitCost          Decimal  @db.Decimal(18, 2)\n  warehouseLocation String?\n  tenantId          String\n  tenant            Tenant   @relation(fields: [tenantId], references: [id])\n  createdAt         DateTime @default(now())\n  updatedAt         DateTime @updatedAt\n\n  @@unique([tenantId, sku])\n  @@index([tenantId])\n}\n\nmodel PurchaseOrder {\n  id          String   @id @default(cuid())\n  poNumber    String\n  vendorName  String\n  vendorEmail String?\n  status      String   @default(\"DRAFT\") // DRAFT | SENT | RECEIVED | CANCELLED\n  totalAmount Decimal  @db.Decimal(18, 2)\n  tenantId    String\n  tenant      Tenant   @relation(fields: [tenantId], references: [id])\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  @@unique([tenantId, poNumber])\n  @@index([tenantId])\n}\n\n// ─── PROJECTS ────────────────────────────────────────────────────\nmodel Project {\n  id          String    @id @default(cuid())\n  name        String\n  description String?\n  status      String    @default(\"ACTIVE\")\n  budget      Decimal   @db.Decimal(18, 2)\n  spent       Decimal   @default(0) @db.Decimal(18, 2)\n  startDate   DateTime\n  endDate     DateTime?\n  tenantId    String\n  tenant      Tenant    @relation(fields: [tenantId], references: [id])\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  milestones Milestone[]\n\n  @@index([tenantId])\n}\n\nmodel Milestone {\n  id          String   @id @default(cuid())\n  projectId   String\n  project     Project  @relation(fields: [projectId], references: [id])\n  title       String\n  dueDate     DateTime\n  isCompleted Boolean  @default(false)\n  createdAt   DateTime @default(now())\n}\n\n// ─── NOTIFICATIONS ───────────────────────────────────────────────\nmodel Notification {\n  id        String   @id @default(cuid())\n  userId    String\n  user      User     @relation(fields: [userId], references: [id])\n  title     String\n  body      String\n  type      String // INFO | WARNING | ERROR | SUCCESS\n  isRead    Boolean  @default(false)\n  createdAt DateTime @default(now())\n\n  @@index([userId])\n}\n\n// ─── AUDIT LOG ───────────────────────────────────────────────────\nmodel AuditLog {\n  id         String   @id @default(cuid())\n  userId     String\n  user       User     @relation(fields: [userId], references: [id])\n  tenantId   String\n  tenant     Tenant   @relation(fields: [tenantId], references: [id])\n  action     String // CREATE | UPDATE | DELETE | LOGIN | LOGOUT\n  resource   String // e.g. \"Invoice\", \"Employee\"\n  resourceId String?\n  metadata   Json?\n  ipAddress  String?\n  createdAt  DateTime @default(now())\n\n  @@index([tenantId])\n  @@index([userId])\n}\n",
  "inlineSchemaHash": "cb472a6930e6f4ffd284e566e359e1b7d8351b3ec73a13023352f18cc493a95b",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Tenant\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"plan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TenantToUser\"},{\"name\":\"accounts\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToTenant\"},{\"name\":\"employees\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeToTenant\"},{\"name\":\"purchaseOrders\",\"kind\":\"object\",\"type\":\"PurchaseOrder\",\"relationName\":\"PurchaseOrderToTenant\"},{\"name\":\"inventoryItems\",\"kind\":\"object\",\"type\":\"InventoryItem\",\"relationName\":\"InventoryItemToTenant\"},{\"name\":\"projects\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToTenant\"},{\"name\":\"auditLogs\",\"kind\":\"object\",\"type\":\"AuditLog\",\"relationName\":\"AuditLogToTenant\"}],\"dbName\":null},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenant\",\"kind\":\"object\",\"type\":\"Tenant\",\"relationName\":\"TenantToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"notifications\",\"kind\":\"object\",\"type\":\"Notification\",\"relationName\":\"NotificationToUser\"},{\"name\":\"auditLogs\",\"kind\":\"object\",\"type\":\"AuditLog\",\"relationName\":\"AuditLogToUser\"}],\"dbName\":null},\"Account\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"currency\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"balance\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenant\",\"kind\":\"object\",\"type\":\"Tenant\",\"relationName\":\"AccountToTenant\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"journalLines\",\"kind\":\"object\",\"type\":\"JournalLine\",\"relationName\":\"AccountToJournalLine\"}],\"dbName\":null},\"JournalEntry\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"reference\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isLocked\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lines\",\"kind\":\"object\",\"type\":\"JournalLine\",\"relationName\":\"JournalEntryToJournalLine\"}],\"dbName\":null},\"JournalLine\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"journalEntryId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"journalEntry\",\"kind\":\"object\",\"type\":\"JournalEntry\",\"relationName\":\"JournalEntryToJournalLine\"},{\"name\":\"accountId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"account\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToJournalLine\"},{\"name\":\"debit\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"credit\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Invoice\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"number\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vendorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"clientName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"currency\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Employee\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employeeCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"department\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"designation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"salary\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"joinedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"managerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"manager\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeHierarchy\"},{\"name\":\"reports\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeHierarchy\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenant\",\"kind\":\"object\",\"type\":\"Tenant\",\"relationName\":\"EmployeeToTenant\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"leaveRequests\",\"kind\":\"object\",\"type\":\"LeaveRequest\",\"relationName\":\"EmployeeToLeaveRequest\"},{\"name\":\"payrollRuns\",\"kind\":\"object\",\"type\":\"PayrollRun\",\"relationName\":\"EmployeeToPayrollRun\"}],\"dbName\":null},\"LeaveRequest\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employeeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employee\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeToLeaveRequest\"},{\"name\":\"leaveType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"reason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"PayrollRun\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employeeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"employee\",\"kind\":\"object\",\"type\":\"Employee\",\"relationName\":\"EmployeeToPayrollRun\"},{\"name\":\"period\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"grossPay\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"deductions\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"netPay\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"processedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"InventoryItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sku\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"reorderPoint\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"unitCost\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"warehouseLocation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenant\",\"kind\":\"object\",\"type\":\"Tenant\",\"relationName\":\"InventoryItemToTenant\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"PurchaseOrder\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"poNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vendorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vendorEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenant\",\"kind\":\"object\",\"type\":\"Tenant\",\"relationName\":\"PurchaseOrderToTenant\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"budget\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"spent\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenant\",\"kind\":\"object\",\"type\":\"Tenant\",\"relationName\":\"ProjectToTenant\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"milestones\",\"kind\":\"object\",\"type\":\"Milestone\",\"relationName\":\"MilestoneToProject\"}],\"dbName\":null},\"Milestone\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"MilestoneToProject\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"isCompleted\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Notification\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"NotificationToUser\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"body\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isRead\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"AuditLog\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AuditLogToUser\"},{\"name\":\"tenantId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tenant\",\"kind\":\"object\",\"type\":\"Tenant\",\"relationName\":\"AuditLogToTenant\"},{\"name\":\"action\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"resource\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"resourceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

