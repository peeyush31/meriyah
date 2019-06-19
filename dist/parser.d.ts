import { Token } from './token';
import * as ESTree from './estree';
import { ScopeState } from './scope';
import { Context, ParserState, PropertyKind, BindingOrigin, Flags, FunctionStatement, BindingType, HoistedClassFlags, HoistedFunctionFlags } from './common';
export declare function create(source: string): ParserState;
export interface Options {
    module?: boolean;
    next?: boolean;
    ranges?: boolean;
    webCompat?: boolean;
    loc?: boolean;
    raw?: boolean;
    directives?: boolean;
    globalReturn?: boolean;
    impliedStrict?: boolean;
    parenthesizedExpr?: boolean;
    lexical?: boolean;
}
export declare function parseSource(source: string, options: Options | void, context: Context): ESTree.Program;
export declare function parseStatementList(parser: ParserState, context: Context, scope: ScopeState): ESTree.Statement[];
export declare function parseModuleItemList(parser: ParserState, context: Context, scope: ScopeState): (ReturnType<typeof parseDirective | typeof parseModuleItem>)[];
export declare function parseModuleItem(parser: ParserState, context: Context, scope: ScopeState, start: number): any;
export declare function parseStatementListItem(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.Statement | ESTree.Decorator[];
export declare function parseStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, allowFuncDecl: FunctionStatement, start: number): ESTree.Statement;
export declare function parseExpressionOrLabelledStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, allowFuncDecl: FunctionStatement, start: number): ESTree.ExpressionStatement | ESTree.LabeledStatement;
export declare function parseBlock(parser: ParserState, context: Context, scope: any, labels: any, start: number): ESTree.BlockStatement;
export declare function parseReturnStatement(parser: ParserState, context: Context, start: number): ESTree.ReturnStatement;
export declare function parseExpressionStatement(parser: ParserState, context: Context, expression: ESTree.Expression, start: number): ESTree.ExpressionStatement;
export declare function parseLabelledStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, label: string, expr: ESTree.Identifier, token: Token, allowFuncDecl: 0 | 1, start: number): ESTree.LabeledStatement;
export declare function parseAsyncArrowOrAsyncFunctionDeclaration(parser: ParserState, context: Context, scope: ScopeState, labels: any, allowFuncDecl: FunctionStatement, start: number): ESTree.ExpressionStatement | ESTree.LabeledStatement | ESTree.FunctionDeclaration;
export declare function parseDirective(parser: ParserState, context: Context, expression: any, token: Token, start: number): ESTree.ExpressionStatement;
export declare function parseEmptyStatement(parser: ParserState, context: Context, start: number): ESTree.EmptyStatement;
export declare function parseThrowStatement(parser: ParserState, context: Context, start: number): ESTree.ThrowStatement;
export declare function parseIfStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.IfStatement;
export declare function parseConsequentOrAlternate(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.Statement | ESTree.FunctionDeclaration;
export declare function parseSwitchStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.SwitchStatement;
export declare function parseWhileStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.WhileStatement;
export declare function parseIterationStatementBody(parser: ParserState, context: Context, scope: ScopeState, labels: any): ESTree.Statement;
export declare function parseContinueStatement(parser: ParserState, context: Context, labels: any, start: number): ESTree.ContinueStatement;
export declare function parseBreakStatement(parser: ParserState, context: Context, labels: any, start: number): ESTree.BreakStatement;
export declare function parseWithStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.WithStatement;
export declare function parseDebuggerStatement(parser: ParserState, context: Context, start: number): ESTree.DebuggerStatement;
export declare function parseTryStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.TryStatement;
export declare function parseCatchBlock(parser: ParserState, context: Context, scope: ScopeState, labels: any, isLexical: number, start: number): ESTree.CatchClause;
export declare function parseDoWhileStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.DoWhileStatement;
export declare function parseLetIdentOrVarDeclarationStatement(parser: ParserState, context: Context, scope: ScopeState, start: number): ESTree.VariableDeclaration | ESTree.LabeledStatement | ESTree.ExpressionStatement;
export declare function parseVariableStatement(parser: ParserState, context: Context, scope: ScopeState, origin: BindingOrigin, start: number): ESTree.VariableDeclaration;
export declare function parseVariableDeclarationList(parser: ParserState, context: Context, scope: ScopeState, verifyDuplicates: 0 | 1, type: BindingType, origin: BindingOrigin): ESTree.VariableDeclarator[];
export declare function parseForStatement(parser: ParserState, context: Context, scope: ScopeState, labels: any, start: number): ESTree.ForStatement | ESTree.ForInStatement | ESTree.ForOfStatement;
export declare function parseExpression(parser: ParserState, context: Context, assignable: 0 | 1, inGroup: 0 | 1, start: number): ESTree.Expression;
export declare function parseSequenceExpression(parser: ParserState, context: Context, start: number, expr: ESTree.AssignmentExpression | ESTree.Expression): ESTree.SequenceExpression;
export declare function parseExpressions(parser: ParserState, context: Context, assignable: 0 | 1, start: number): ESTree.SequenceExpression | ESTree.Expression;
export declare function parseAssignmentExpression(parser: ParserState, context: Context, inGroup: 0 | 1, start: number, left: ESTree.AssignmentExpression | ESTree.LogicalExpression | ESTree.BinaryExpression | ESTree.Identifier | ESTree.Literal | ESTree.ConditionalExpression): ESTree.AssignmentExpression | ESTree.LogicalExpression | ESTree.BinaryExpression | ESTree.Identifier | ESTree.Literal | ESTree.ConditionalExpression;
export declare function parseConditionalExpression(parser: ParserState, context: Context, test: ESTree.Expression, start: number): ESTree.ConditionalExpression;
export declare function parseBinaryExpression(parser: ParserState, context: Context, inGroup: 0 | 1, start: number, minPrec: number, left: ESTree.AssignmentExpression | ESTree.BinaryExpression | ESTree.LogicalExpression | ESTree.Identifier | ESTree.Literal | ESTree.ConditionalExpression): ESTree.AssignmentExpression | ESTree.LogicalExpression | ESTree.BinaryExpression | ESTree.Identifier | ESTree.Literal | ESTree.ConditionalExpression;
export declare function parseUnaryExpression(parser: ParserState, context: Context, start: number, inGroup: 0 | 1): ESTree.UnaryExpression;
export declare function parseYieldExpressionOrIdentifier(parser: ParserState, context: Context, start: number): any;
export declare function parseAwaitExpressionOrIdentifier(parser: ParserState, context: Context, inNewExpression: 0 | 1, start: number): ESTree.Identifier | ESTree.Expression | ESTree.ArrowFunctionExpression | ESTree.AwaitExpression;
export declare function parseFunctionBody(parser: ParserState, context: Context, scope: any, origin: BindingOrigin, firstRestricted: Token | undefined): ESTree.BlockStatement;
export declare function parseSuperExpression(parser: ParserState, context: Context, start: number): ESTree.Super;
export declare function parseLeftHandSideExpression(parser: ParserState, context: Context, assignable: 0 | 1, inGroup: 0 | 1, start: number): any;
export declare function parseMemberOrUpdateExpression(parser: ParserState, context: Context, expr: ESTree.Expression, inNewExpression: 0 | 1, inGroup: 0 | 1, start: number): any;
export declare function parsePrimaryExpressionExtended(parser: ParserState, context: Context, type: BindingType, inNewExpression: 0 | 1, assignable: 0 | 1, inGroup: 0 | 1, start: number): any;
export declare function parseImportExpression(parser: ParserState, context: Context, inGroup: 0 | 1, start: number): ESTree.ImportExpression;
export declare function parseBigIntLiteral(parser: ParserState, context: Context, start: number): ESTree.BigIntLiteral;
export declare function parseTemplateLiteral(parser: ParserState, context: Context, start: number): ESTree.TemplateLiteral;
export declare function parseTemplateTail(parser: ParserState, context: Context, start: number): ESTree.TemplateElement;
export declare function parseTemplate(parser: ParserState, context: Context, start: number): ESTree.TemplateLiteral;
export declare function parseTemplateSpans(parser: ParserState, context: Context, tail: boolean, start: number): ESTree.TemplateElement;
export declare function parseArguments(parser: ParserState, context: Context, inGroup: 0 | 1): (ESTree.SpreadElement | ESTree.Expression)[];
export declare function parseIdentifier(parser: ParserState, context: Context, start: number): ESTree.Identifier;
export declare function parseLiteral(parser: ParserState, context: Context, start: number): ESTree.Literal;
export declare function parseNullOrTrueOrFalseLiteral(parser: ParserState, context: Context, start: number): ESTree.Literal;
export declare function parseThisExpression(parser: ParserState, context: Context, start: number): ESTree.ThisExpression;
export declare function parseFunctionDeclaration(parser: ParserState, context: Context, scope: ScopeState, allowGen: 0 | 1, flags: HoistedFunctionFlags, isAsync: 0 | 1, start: number): ESTree.FunctionDeclaration;
export declare function parseFunctionExpression(parser: ParserState, context: Context, isAsync: 0 | 1, inGroup: 0 | 1, start: number): ESTree.FunctionExpression;
export declare function parseArrayExpressionOrPattern(parser: ParserState, context: Context, scope: any, skipInitializer: 0 | 1, inGroup: 0 | 1, type: BindingType, origin: BindingOrigin, start: number): ESTree.ArrayExpression | ESTree.ArrayPattern;
export declare function parseMethodDefinition(parser: ParserState, context: Context, kind: PropertyKind, inGroup: 0 | 1, start: number): ESTree.FunctionExpression;
export declare function parseObjectLiteralOrPattern(parser: ParserState, context: Context, scope: any, skipInitializer: 0 | 1, inGroup: 0 | 1, type: BindingType, origin: BindingOrigin, start: number): ESTree.ObjectExpression | ESTree.ObjectPattern | ESTree.AssignmentExpression;
export declare function parseMethodFormals(parser: ParserState, context: Context, scope: any, kind: PropertyKind, type: BindingType, inGroup: 0 | 1): any[];
export declare function parseComputedPropertyName(parser: ParserState, context: Context, inGroup: 0 | 1): ESTree.Expression;
export declare function parseParenthesizedExpression(parser: ParserState, context: Context, assignable: 0 | 1, start: number): any;
export declare function parseIdentifierOrArrow(parser: ParserState, context: Context, start: number): ESTree.Identifier | ESTree.ArrowFunctionExpression;
export declare function parseArrowFunctionExpression(parser: ParserState, context: Context, scope: any, params: ESTree.Pattern[], isAsync: 0 | 1, start: number): ESTree.ArrowFunctionExpression;
export declare function parseFormalParametersOrFormalList(parser: ParserState, context: Context, scope: any, inGroup: 0 | 1, type: BindingType): any[];
export declare function parseNewExpression(parser: ParserState, context: Context, inGroup: 0 | 1, start: number): ESTree.NewExpression | ESTree.Expression | ESTree.MetaProperty;
export declare function parseMetaProperty(parser: ParserState, context: Context, meta: ESTree.Identifier, start: number): ESTree.MetaProperty;
export declare function parseAsyncExpression(parser: ParserState, context: Context, expr: ESTree.Identifier, inNewExpression: 0 | 1, assignable: 0 | 1, inGroup: 0 | 1, start: number): ESTree.Expression;
export declare function parseAsyncArrowOrCallExpression(parser: ParserState, context: Context, callee: ESTree.Identifier | void, assignable: 0 | 1, flags: Flags, start: number): any;
export declare function parseRegExpLiteral(parser: ParserState, context: Context, start: number): ESTree.RegExpLiteral;
export declare function parseClassDeclaration(parser: ParserState, context: Context, scope: any, flags: HoistedClassFlags, start: number): ESTree.ClassDeclaration;
export declare function parseClassExpression(parser: ParserState, context: Context, inGroup: 0 | 1, start: number): ESTree.ClassExpression;
export declare function parseDecorators(parser: ParserState, context: Context): ESTree.Decorator[];
export declare function parseDecoratorList(parser: ParserState, context: Context, start: number): ESTree.Decorator;
export declare function parseClassBody(parser: ParserState, context: Context, inheritedContext: Context, scope: any, type: BindingType, origin: BindingOrigin, inGroup: 0 | 1): ESTree.ClassBody;
export declare function parseFieldDefinition(parser: ParserState, context: Context, key: ESTree.PrivateName | ESTree.Expression | null, state: PropertyKind, decorators: ESTree.Decorator[] | null, start: number): ESTree.FieldDefinition;
export declare function parseBindingPattern(parser: ParserState, context: Context, scope: any, dupeChecks: 0 | 1, type: BindingType, origin: BindingOrigin, start: number): ESTree.Pattern | ESTree.Identifier;
//# sourceMappingURL=parser.d.ts.map