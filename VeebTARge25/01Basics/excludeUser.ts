type RoleExclude = "admin" | "user" | "moderator"
type ExcludeRole = "testing" | "admin" | "user" | "security"

//võta mõlemast typest kokku ja välista teatud väärtused
type O = Exclude<RoleExclude, "user" | "moderator">
//condition ? exprIfTrue : exprIfFalse
